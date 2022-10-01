import React from 'react'

const ClearOutput = (props) => {

    const clearOutput = () => {
        props.setOutput('')
    }

    return (
        <>
        <button onClick={clearOutput}>clear output</button>
        </>
    )
}

export default ClearOutput