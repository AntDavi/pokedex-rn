import React from "react";
import Squirtle from './squirtle.json'
import AnimatedLottieView from "lottie-react-native";

import * as S from './styles'
import { Button } from "../../components/Button";

export function Welcome() {
    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView style={{width: 200}} autoPlay source={Squirtle} loop/>
                </S.WrapperImage>
            </S.WrapperAnimation>
        </S.Content>
        <S.Footer>
            <S.Title>
                Gotta catch...
            </S.Title>
                <Button title="'em all"/>
        </S.Footer>
    </S.Container>
}