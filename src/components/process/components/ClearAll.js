import React from 'react'

const ClearAll = (props) => {

    const clearAll = () => {
        props.setOutput('')
        props.setInput('')
    }

    return (
        <>
        <button onClick={clearAll}>clear all</button>
        </>
    )
}

export default ClearAll