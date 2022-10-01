import React, { useState } from 'react'

const Input = (props) => {

    const handleChange = (e) => {
        props.setInput(e.target.value)
        console.log(props.inputText)
    }

    return (
        <div className="item" >
        <h3>INPUT</h3>
        <textarea value={props.inputText} onChange={handleChange} />
        </div>
    )
}

export default Input