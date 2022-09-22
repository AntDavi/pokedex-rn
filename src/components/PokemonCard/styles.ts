import styled, { css } from "styled-components/native";

type PokemonType = {
    type: string
}

export const Container = styled.TouchableOpacity<PokemonType>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.backgroundCard[type]}
        border-radius: 8px;
        margin-top: 32px;
        flex-direction: row;
        padding: 24px;
    `}
`

export const LeftSide = styled.View`
    width: 50%;
    position: relative;
`

export const PokemonID = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.light_text};
    `}
`

export const PokemonName = styled.Text`
    ${({theme}) => css`

        font-size: 22px;
        line-height: 32px;
        margin-top: 8px;
        text-transform: capitalize
        color: ${theme.colors.text_white};
    `}
`

export const PokemonContentType = styled.View`
    flex-direction: row;
`

export const ImageCardDetailsLeftSide = styled.Image`
    position: absolute;
    width: 72px;
    height: 32px;
    left: 98px;
    top: -12px;
`

export const PokemonType = styled.View<PokemonType>`
    ${({theme, type}) => css`
        background-color: ${theme.colors.boxType[type]};
        padding: 4px;
        width: 64px;
        height: 24px;
        border-radius: 8px;
        margin-left: 4px;
        margin-top: 4px;
        justify-content: center;
        align-items: center;
    `}
`

export const PokemonTypeTitle = styled.Text`
    ${({theme}) => css`
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.text_white};
        text-transform: capitalize;
    `}
`

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    width: 70%;
    position: relative;
`

export const PokemonImage = styled.Image`
    margin-top: -40px;
    width: 130px;
    height: 130px;
`

export const ImageCardDetailsRightSide = styled.Image`
    position: absolute;
    right: 0;
    bottom: 0;
`