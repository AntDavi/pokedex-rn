import React from "react";
import * as S from './styles'
import DetailsLeftSide from '../../assets/images/dots.png'
import DetailsRightSide from '../../assets/images/pokeballCard.png'
import { TouchableOpacityProps } from "react-native";

import { FadeAnimation } from '../../components/FadeAnimation';

export type PokemonType = {
    type: {
        name: string;
    }
}

export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[];
}

type Props = {
    data: Pokemon;
} & TouchableOpacityProps

export function PokemonCard({data, ...rest} : Props) {
    return <S.Container type={data.types[0].type.name} {...rest}>

        <S.LeftSide>
            <S.PokemonID>#{data.id}</S.PokemonID>
            <S.PokemonName>{data.name}</S.PokemonName>
            <S.ImageCardDetailsLeftSide source={DetailsLeftSide}/>

            <S.PokemonContentType>
                {data.types.map(pokemonType => 
                    <S.PokemonType type={pokemonType.type.name}>
                        <S.PokemonTypeTitle 
                            key={pokemonType.type.name} 
                        >
                            {pokemonType.type.name}
                        </S.PokemonTypeTitle>
                    </S.PokemonType>
                )}
            </S.PokemonContentType>
        </S.LeftSide>  

        <S.RightSide>
            <FadeAnimation>
                <S.ImageCardDetailsRightSide source={DetailsRightSide}/>
                <S.PokemonImage
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                    }}
                />
            </FadeAnimation>
        </S.RightSide>
        
    </S.Container>
}