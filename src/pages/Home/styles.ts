import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css `
        flex: 1;
        background-color: ${theme.colors.background};
        padding: 24px
    `}
`