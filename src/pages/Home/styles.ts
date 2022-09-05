import styled, { css } from "styled-components/native";

import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
    ${({theme}) => css `
        flex: 1;
        background-color: ${theme.colors.background};
    `}
`

export const Header = styled.ImageBackground`
    ${({theme}) => css`
        height: 220px;
        width: ${windowWidth}px;
        background-color: ${theme.colors.background};
        margin-left: -20px;
    `}
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 32px;
        line-height: 32px;
        font-weight: bold;
        color: ${theme.colors.light_text};
    `}
`