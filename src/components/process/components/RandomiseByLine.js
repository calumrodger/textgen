import React from 'react'

const RandomiseByLine = (props) => {
    const inputArray = props.inputText.split("\n")
    const randomisedArray = inputArray.sort(() => 0.5 - Math.random())
    const randomisedString = randomisedArray.join("\n")

    const randomiseByLine = () => {
        props.setOutput(randomisedString)
    }

    return (
        <>
        <button onClick={randomiseByLine}>randomise by line</button>
        </>
    )
}

export default RandomiseByLine