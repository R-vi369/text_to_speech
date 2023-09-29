import React, { useState } from 'react';
import './Speech.scss'
function Speech() {
  const [text, setText] = useState('');
  const synth = window.speechSynthesis;

  const speak = () => {
    if (synth && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
  };
  const del =()=>{
    setText("")
  }

  return (
    
    <div className='speech'>
        <h2>Enter any thing to generate Voice</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to be spoken"
        className='text'
      />
       <div className="btns">

      <button className='del' onClick={del}>Delete</button>
      <button className='speak' onClick={speak}>Speak</button>
       </div>
    </div>
  );
}

export default Speech;