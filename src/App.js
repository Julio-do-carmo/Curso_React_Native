import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
//import CompPadrao, {Comp1, Comp2} from './components/Multi'
//import Primeiro from './components/Primeiro'

//export default () => <Text> Primeiro componente! </Text> //função simplificada

export default () => (
    <SafeAreaView style ={style.App}>
        <ParImpar num = {3}/>
        {/*
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={15} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <MinMax min={3} max={20}/>
        <MinMax min={1} max={94}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        //backgroundColor : '#A00',
        flexGrow: 1, //cresce conforme a tela
        justifyContent: "center",
        alignItems: "center",
    }
})