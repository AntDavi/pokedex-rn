import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Pokemon, PokemonCard, PokemonType } from '../../components/PokemonCard';
import api from '../../services/api';
import * as S from './styles'

import { useNavigation } from '@react-navigation/native';

import PokeballHeader from '../../assets/images/pokeball.png'

type Request = {
    id: number
    types: PokemonType[];
}

export function Home() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const {navigate} = useNavigation();

    function handlerNavigation(pokemonId: number) {
        navigate('About', {
            pokemonId,
        })
    }

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon')
            const { results } = response.data;
            
            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const {id, types} = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )

            setPokemons(payloadPokemons)
        }

        getAllPokemons()
    }, [])

    async function getMoreInfo (url: string): Promise<Request> {
        const response = await api.get(url);
        const {id, types} = response.data as Request;

        return {id, types
        }
    }

    return (
        <S.Container>
            <FlatList
                ListHeaderComponent={
                    <>
                        <S.Header>
                            <S.Title>Pokedex</S.Title>
                        </S.Header>
                    </>
                }
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 20,
                }}
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                    <PokemonCard data={pokemon} onPress={() => {
                        handlerNavigation(pokemon.id)
                    }}/>
                )}
            />
        </S.Container>
    )
}