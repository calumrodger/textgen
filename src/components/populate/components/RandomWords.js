import React from 'react'

const RandomWords = (props) => {

    const makeRandomWords = () => {
        const words = require('fun-word-list')
        const n = 100
        const array = []       
        for (let i = 0; i < n; i++) {
            const noun = (words.nouns[Math.floor(Math.random()*words.nouns.length)])[0]
            array.push(noun)
        }
        const string = array.join(" ")
        props.setInput(string)
    }

    return (
        <>
        <button onClick={makeRandomWords}>make 100 fun random nouns</button>
        </>
    )
}

export default RandomWords