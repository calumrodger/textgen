import React, { useState } from 'react'

const DoNothing = (props) => {

    const [inputField, setInputField] = useState('empty')

    const handleChange = (e) => {
        e.preventDefault()
        setInputField(e.target.value)
    }

    const doNothing = (e) => {
        e.preventDefault()
        setInputField('nothing')
    }

    return (
        <>
        <form>
        <input type="text" value={inputField} onChange={handleChange}></input>
        <button onClick={doNothing}>do nothing</button>
        </form>
        </>
    )
}

export default DoNothing