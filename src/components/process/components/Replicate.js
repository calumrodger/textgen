import React from 'react'

const Replicate = (props) => {

    const replicate = () => {
        props.setOutput(props.inputText)
    }

    return (
        <>
        <button onClick={replicate}>replicate input</button>
        </>
    )
}

export default Replicate