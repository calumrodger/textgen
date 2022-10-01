import React, { useState } from 'react'
import './App.css';

import PopulateContainer from './components/populate/Populate';
import Input from './components/input/Input';
import ProcessContainer from './components/process/container/ProcessContainer';
import Output from './components/output/Output';

const App = () => {

  const [inputText, setInputText] = useState('input')
  const [outputText, setOutputText] = useState('output')
  const [selectedWord, setSelectedWord] = useState([])

  const setInput = (text) => {
    setInputText(text)
  }

  const setOutput = (text) => {
    setOutputText(text)
  }

  const setSelected = (text) => {
    setSelectedWord(text)
  }

  return (
    <div className="container">
    <PopulateContainer setInput={setInput} />
    <Input inputText={inputText} outputText={outputText} setInput={setInput} setOutput={setOutput}/>
    <ProcessContainer inputText={inputText} outputText={outputText} setInput={setInput} setOutput={setOutput}/>
    <Output selectedWord={selectedWord} setSelected={setSelected} inputText={inputText} outputText={outputText} setInput={setInput} setOutput={setOutput}/>
    </div>
  );
}

export default App;
