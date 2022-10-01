import React from 'react'

import Replicate from '../components/Replicate'
import SendOutputToInput from '../components/SendOutputToInput'
import SaveOutputToTxt from '../components/SaveOutputToTxt'
import ClearInput from '../components/ClearInput'
import ClearOutput from '../components/ClearOutput'
import ClearAll from '../components/ClearAll'
import AlphabetiseByWord from '../components/AlphabetiseByWord'
import AlphabetiseByLine from '../components/AlphabetiseByLine'
import RandomiseByLine from '../components/RandomiseByLine'
import RandomiseByWord from '../components/RandomiseByWord'

const ProcessContainer = (props) => {
    return (
        <div className="item">
        <div className="process-container">
        <h3>PROCESS</h3>
        <Replicate setOutput={props.setOutput} inputText={props.inputText}/>
        <SendOutputToInput setInput={props.setInput} outputText={props.outputText}/>
        <SaveOutputToTxt setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <ClearInput setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <ClearOutput setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <ClearAll setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <AlphabetiseByWord setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <AlphabetiseByLine setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <RandomiseByLine setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        <RandomiseByWord setInput={props.setInput} setOutput={props.setOutput} inputText={props.inputText} outputText={props.outputText}/>
        </div>
        </div>
    )
}

export default ProcessContainer