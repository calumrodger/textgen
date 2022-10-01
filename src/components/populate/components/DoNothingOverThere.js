import React, { useState } from 'react'

const DoNothingOverThere = (props) => {

    const doNothingOverThere = (e) => {
        e.preventDefault()
        props.setInput('nothing')
    }

    return (
        <>
        <button onClick={doNothingOverThere}>do nothing over there</button>
        </>
    )
}

export default DoNothingOverThere