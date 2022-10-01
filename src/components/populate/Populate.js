import React from 'react'

import DoNothing from './components/DoNothing'
import DoNothingOverThere from './components/DoNothingOverThere'
import RandomWords from './components/RandomWords'

const PopulateContainer = (props) => {
    return (
        <div className="item">
        <div className="populate-container">
        <h3>POPULATE</h3>
        <DoNothing />
        <DoNothingOverThere setInput={props.setInput} />
        <RandomWords setInput={props.setInput}/>
        </div>
        </div>
    )
}

export default PopulateContainer