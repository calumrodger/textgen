import React, { useState } from 'react'

const Output = (props) => {

    const highlight = (e) => {
        e.preventDefault()
        if (props.selectedWord) {
            props.selectedWord.className = "unselected-output-word"
        }
        e.target.className = "selected-output-word"
        props.setSelected(e.target)   
    }

    const outputArray = props.outputText.split(" ")

    const spanWords = outputArray.map((word) => {
        return (
            <span className="unselected-output-word" onClick={highlight}>{word} </span>
        )
    })



    return (
        <div className="item" >
        <h3>OUTPUT</h3>
        {spanWords}
        </div>
    )
}

export default Output