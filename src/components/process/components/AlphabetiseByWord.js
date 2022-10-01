import React from 'react'

const AlphabetiseByWord = (props) => {
    const inputArray = props.inputText.split(" ")
    const alphabetisedArray = inputArray.sort()
    const alphabestisedString = alphabetisedArray.join(" ")

    const alphabetiseByWord = () => {
        props.setOutput(alphabestisedString)
        console.log(props.outputText)
    }

    return (
        <>
        <button onClick={alphabetiseByWord}>alphabetise by word</button>
        </>
    )
}

export default AlphabetiseByWord