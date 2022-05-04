import React from 'react'
import Filho from './Filho'

export default props => {
    let x = 15
    let y = 100
    return (
        <React.Fragment>
            <Filho a={x} b={y}/>
            <Filho a={x + 100} b={y + 200}/>
        </React.Fragment>
    )
}