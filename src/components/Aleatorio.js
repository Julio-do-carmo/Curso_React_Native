import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => { //props somente leitura
    const delta = props.max - props.min + 1
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}