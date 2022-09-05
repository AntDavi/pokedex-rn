import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css `
        flex: 1;
        background-color: ${theme.colors.backgroundCard.water}
    `}
`

export const Content = styled.View`
    height: 70%;
    justify-content: center;
    align-items: center;
`

export const WrapperAnimation = styled.View`
    ${({theme}) => css `
        background-color: ${theme.colors.dark_blue};
        width: 200px;
        height: 300px;
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`

export const Footer = styled.View`
    ${({theme}) => css `
        justify-content: center;
        align-items: center;
        height: 30%;
        background-color: ${theme.colors.background};
        border-top-right-radius: 24px;
        border-top-left-radius: 24px;
        padding-horizontal: 32px
    `}
`

export const Title = styled.Text`
    ${({theme}) => css `
        font-size: 32px;
        color: ${theme.colors.red};

    `}
`