import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Alert, ScrollView, Text } from 'react-native'
import api from '../../services/api'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import circle from '../../assets/images/circle.png'
import dots from '../../assets/images/dots.png'

import * as S from './styles'
import { FadeAnimation } from '../../components/FadeAnimation'
import theme from '../../global/styles/theme'

type RouteParams = {
    pokemonId: number
}

type Stat = {
    base_stat: 62,
    stat: {
        name: string,
    }
}

type Ability = {
    ability: {
        name: string
    }
}

export type TypeName = 
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground'

type PokemonType = {
    type: {
        name:
        | 'grass'
        | 'fire'
        | 'water'
        | 'poison'
        | 'normal'
        | 'bug'
        | 'flying'
        | 'eletric'
        | 'ground'
    }
}

type PokemonProps = {
    id: number;
    name: string;
    stats: Stat[];
    abilities: Ability[];
    color: string;
    types: PokemonType[]
}

export function About() {
    const Routes = useRoute();
    const { goBack } = useNavigation();
    const { pokemonId } = Routes.params as RouteParams;

    const { colors } = useTheme()

    const [pokemon, setPokemon] = useState({} as PokemonProps)

    const [load, setLoad] = useState(true)

    useEffect(() => {
        async function getPokemonDetail() {
            try {
                const response = await api.get(`/pokemon/${pokemonId}`);
                const {stats, abilities, id, name, types} = response.data;

                const currentType = types[0].type.name as TypeName;
                const color = colors.backgroundCard[currentType];

                setPokemon ({
                    stats, abilities, id, name, types, color
                })

                setLoad(false)

            } catch(err) {
                Alert.alert('Ops, ocorreu algum erro...')
            } finally {
                setLoad(false)
            }
        }

        getPokemonDetail()
    }, [])

    function handleGoBack() {
        goBack();
    }


    return (
        <>
            {
                load ? <>
                    <Text style={{marginTop: 200}}> Carregando....</Text>
                </> : 

                <ScrollView style={{flex: 1, backgroundColor: "#fff"}}>
                <S.Header type={pokemon.types[0].type.name}>
                    <S.BackButton onPress={handleGoBack}>
                        <Feather name="chevron-left" size={24} color="#000"/>
                    </S.BackButton>

                        
                    <S.ContentImage>
                        <S.CircleImage source={circle}/>
                        <FadeAnimation>
                            <S.PokemonImage
                                source={{
                                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                                }}
                                />
                        </FadeAnimation>
                    </S.ContentImage>

                    <S.Content>
                        <S.PokemonId>
                                #{pokemon.id}
                        </S.PokemonId>
                        <S.PokemonName>
                                {pokemon.name}
                        </S.PokemonName>

                        <S.PokemonTypeContainer>
                                {pokemon.types.map(({type}) => 
                                    <S.PokemonType type={type.name} key={type.name}>
                                        <S.TypeTitle>
                                            {type.name}
                                        </S.TypeTitle>
                                    </S.PokemonType>
                                )}
                        </S.PokemonTypeContainer>
                    </S.Content>
                    <S.DotsImage source={dots}/>
                </S.Header>

                <S.Container>
                        <S.Title type={pokemon.types[0].type.name}>
                            Base States
                        </S.Title>

                        {
                            pokemon.stats.map(attribute => <>
                                <S.StatusBar key={attribute.stat.name}>
                                    <S.StatusBarHeader>
                                        <S.Attributes>
                                            {attribute.stat.name}
                                        </S.Attributes>
                                        <S.AttributeValue>
                                            {attribute.base_stat}
                                        </S.AttributeValue>
                                    </S.StatusBarHeader>

                                    <S.ContentBar>
                                        <S.ProgressBar 
                                            type={pokemon.types[0].type.name}
                                            borderWidth={1}
                                            progress={250}
                                            width={attribute.base_stat}
                                            color={pokemon.color}
                                        />
                                        <S.ProgressShadow 
                                            borderWidth={1}
                                            progress={250}
                                            width={250}
                                            color={theme.colors.shadow}
                                        />
            
                                    </S.ContentBar>
                                </S.StatusBar>
                            </>
                            )
                        }

                        <S.Title type={pokemon.types[0].type.name}> Abilities </S.Title>
                            {pokemon.abilities.map(abilityItem => (
                            <S.Ability key={abilityItem.ability.name}>
                                {abilityItem.ability.name}
                            </S.Ability>
                            ))}
                    </S.Container>
                </ScrollView>
            }
        </>
        
    )
}