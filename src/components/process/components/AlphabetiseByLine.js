import React from 'react'

const AlphabetiseByLine = (props) => {
    const inputArray = props.inputText.split("\n")
    const alphabetisedArray = inputArray.sort()
    const alphabestisedString = alphabetisedArray.join("\n")

    const alphabetiseByLine = () => {
        console.log(alphabetisedArray)
        props.setOutput(alphabestisedString)
    }

    return (
        <>
        <button onClick={alphabetiseByLine}>alphabetise by line</button>
        </>
    )
}

export default AlphabetiseByLine