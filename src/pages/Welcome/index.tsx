import React from "react";
import Squirtle from './squirtle.json'
import AnimatedLottieView from "lottie-react-native";

import * as S from './styles'

import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {

    const {navigate} = useNavigation()
    function handlerNavigation() {
        navigate('Home')
    }

    return (
        <S.Container>
            <S.Content>
                <S.WrapperAnimation>
                    <S.WrapperImage>
                        <AnimatedLottieView style={{width: 200}} autoPlay source={Squirtle} loop/>
                    </S.WrapperImage>
                </S.WrapperAnimation>
                <S.Title>
                    PokeDex
                </S.Title>
                <S.Subtitle>
                    Hello there! Welcome to the world of Pokemon!
                </S.Subtitle>
            </S.Content>
            <S.Footer>
                    <Button title="Gotta catch'em all" onPress={handlerNavigation}/>
            </S.Footer>
        </S.Container>
    )
}