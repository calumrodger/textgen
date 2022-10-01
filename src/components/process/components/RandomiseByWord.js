import React from 'react'

const RandomiseByWord = (props) => {
    const inputArray = props.inputText.split(" ")
    const randomisedArray = inputArray.sort(() => 0.5 - Math.random())
    const randomisedString = randomisedArray.join(" ")

    const randomiseByWord = () => {
        props.setOutput(randomisedString)
    }

    return (
        <>
        <button onClick={randomiseByWord}>randomise by word</button>
        </>
    )
}

export default RandomiseByWord