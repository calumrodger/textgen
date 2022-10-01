import React from 'react'

const SendOutputToInput = (props) => {

    const sendToInput = () => {
        props.setInput(props.outputText)
    }

    return (
        <>
        <button onClick={sendToInput}>send output to input</button>
        </>
    )
}

export default SendOutputToInput