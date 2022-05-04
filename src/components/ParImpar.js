import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

//forma de fazer renderização condicional usando operador ternario

export default ({num = 0}) => {
    return (
        <View>
            <Text style={Estilo.txtG}>O resultado é:</Text>
            {num % 2 === 0 //{} => expressão
                ? <Text style={Estilo.txtG}>Par</Text> //if
                : <Text style={Estilo.txtG}>Ímpar</Text> //else
            }
        </View>
    )
}