import React from 'react'

const Output = (props) => {

    const handleChange = (e) => {
        props.setOutput(e.target.value)
        console.log(props.outputText)
    }

    return (
        <div className="item" >
        <h3>OUTPUT</h3>
        <textarea value={props.outputText} onChange={handleChange} />
        </div>
    )
}

export default Output