import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme}) => css `
        width: 100%;
        height: 54px;
        background-color: ${theme.colors.red}
        justify-content: center;
        align-items: center;
        border-radius: 24px
    `}
`

export const Title = styled.Text`
    ${({theme}) => css `
        font-size: 24px;
        color: ${theme.colors.text_white};

    `}
`