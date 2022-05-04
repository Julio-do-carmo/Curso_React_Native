import React from 'react'
import { Button } from 'react-native'

export default props => { //função arrow

    function executar(){
        console.warn('Exec #01!!!')
    }

    return (
        <React.Fragment>
            <Button
                title="Executar#01!"
                onPress={executar} //passar referencia da função (mais usada)
            />
            <Button
                title="Executar#02!"
                onPress={function () { //referenciando dentro de onpress
                    console.warn('Exec #02!!!')
                }}
            />
            <Button
                title="Executar#03!"
                onPress={() => console.warn('Exec #03!!!')} //usando arrow function
            />
        </React.Fragment>
    )
}