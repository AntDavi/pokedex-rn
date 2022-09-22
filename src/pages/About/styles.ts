import styled, { css } from "styled-components/native";
import { TypeName } from '.';
import * as Progress from 'react-native-progress';

type TypeProps = {
    type: TypeName
}

export const Header = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        background-color: ${theme.colors.backgroundCard[type]};
        height: 340px;
        padding: 20px;

        flex-direction: row;
        align-items: center;
        
        position: relative;
    `}
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 20px;
    background-color: #fff;
    border-radius: 100px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentImage = styled.View`
    position: relative;
`;

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    position: absolute;
`;

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`;

export const Content = styled.View`
    margin-left: 30px;
`;

export const PokemonId = styled.Text`
    ${({theme}) => css`
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
        font-weight: bold;
        color: ${theme.colors.light_text};
    `}
`;

export const PokemonName = styled.Text`
    ${({theme}) => css`
        font-size: 28px;
        line-height: 38px;
        font-style: normal;
        font-weight: bold;
        color: ${theme.colors.text_white};
        text-transform: capitalize;
    `}
`;

export const PokemonTypeContainer = styled.View`
    flex-direction: row;
`;

export const PokemonType = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        width: 61px;
        height: 25px;
        background: ${theme.colors.boxType[type]};
        border-radius: 4px;
        justify-content: center;
        align-items: center;
        margin-top: 8px;
        margin-left: 6px;
    `}
`;

export const TypeTitle = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 14px;
        font-style: normal;
        font-weight: 500;
        color: ${theme.colors.text_white};
        text-transform: capitalize;
    `}
`;

export const DotsImage = styled.Image`
    width: 85px;
    position: absolute;
    right: -20px;
    top: 220px;
`;

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        padding: 20px;
        background-color: ${theme.colors.background};
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        margin-top: -40px;
    `}
`;

export const Title = styled.Text<TypeProps>`
    ${({theme, type}) => css`
        font-size: 20px;
        line-height: 25px;
        font-style: normal;
        font-weight: bold;
        color: ${theme.colors.boxType[type]};
        margin: 20px 0;
    `}
`;

export const StatusBar = styled.View`
    padding: 10px 20px;
    width: 100%;
`

export const StatusBarHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Attributes = styled.Text`
    ${({theme}) => css`
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: ${theme.colors.light_text};
    `}
`

export const AttributeValue = styled.Text`
    ${({theme}) => css`
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${theme.colors.detail};
    `}
`

export const ContentBar = styled.View`
    margin-top: 6px;
`

export const ProgressBar = styled(Progress.Bar)<TypeProps>`
    z-index: 3;
`

export const ProgressShadow = styled(Progress.Bar)`
    z-index: -999;
    position: absolute;
`

export const Ability = styled.Text`
    ${({theme}) => css`
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${theme.colors.detail};
        padding: 10px 20px;
        text-transform: capitalize;
    `}
`
