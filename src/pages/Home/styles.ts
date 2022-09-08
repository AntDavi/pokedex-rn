import styled, { css } from "styled-components/native";

import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
    ${({theme}) => css `
        flex: 1;
        background-color: ${theme.colors.background};
    `}
`

export const Header = styled.View`
    ${({theme}) => css`
        height: 100px;
        width: ${windowWidth}px;
        background-color: ${theme.colors.red};
        margin-left: -20px;
        justify-content: flex-end;
        padding: 20px;
    `}
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: 32px;
        line-height: 32px;
        font-weight: bold;
        color: ${theme.colors.text_white};
    `}
`