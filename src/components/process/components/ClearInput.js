import React from 'react'

const ClearInput = (props) => {

    const clearInput = () => {
        props.setInput('')
    }

    return (
        <>
        <button onClick={clearInput}>clear input</button>
        </>
    )
}

export default ClearInput