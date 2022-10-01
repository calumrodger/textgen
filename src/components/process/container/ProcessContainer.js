import React from 'react'

import Replicate from '../components/Replicate'
import SendOutputToInput from '../components/SendOutputToInput'
import SaveOutputToTxt from '../components/SaveOutputToTxt'
import ClearInput from '../components/ClearInput'
import ClearOutput from '../components/ClearOutput'
import ClearAll from '../components/ClearAll'

const ProcessContainer = (props) => {
    return (
        <div className="item">
        <h3>PROCESS</h3>
        <Replicate setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <SendOutputToInput setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <SaveOutputToTxt setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <ClearInput setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <ClearOutput setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <ClearAll setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        </div>
    )
}

export default ProcessContainer