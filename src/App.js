import React, { useState } from 'react'
import './App.css';

import Input from './components/input/Input';
import ProcessContainer from './components/process/container/ProcessContainer';
import Output from './components/output/Output';

function App() {

  const [inputText, setInputText] = useState('input')
  const [outputText, setOutputText] = useState('output')

  const setInput = (text) => {
    setInputText(text)
  }

  const setOutput = (text) => {
    setOutputText(text)
  }

  return (
    <div className="container">
    <Input inputText={inputText} outputText={outputText} setInput={setInput} setOutput={setOutput}/>
    <ProcessContainer inputText={inputText} outputText={outputText} setInput={setInput} setOutput={setOutput}/>
    <Output inputText={inputText} outputText={outputText} setInput={setInput} setOutput={setOutput}/>
    </div>
  );
}

export default App;
