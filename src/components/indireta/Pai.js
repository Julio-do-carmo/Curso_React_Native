import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import Estilo from '../estilo'

export default props => {
    
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }

    return (
        <React.Fragment>
            <Text style={Estilo.txtG}>
                {texto}{num}
            </Text>
            <Filho
                min = {1}
                max = {60}
                funcao = {exibirValor}
            />
        </React.Fragment>
    )
}