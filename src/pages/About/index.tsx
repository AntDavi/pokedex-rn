import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

type RouteParams = {
    pokemonId: number
}

export function About() {
    const Routes = useRoute();
    const { pokemonId } = Routes.params as RouteParams;

    return (
        <>
            <Text style={{margin: 100}}> {pokemonId} </Text>
        </>
    )
}