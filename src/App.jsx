import { useState, useEffect } from 'react';
import './App.css';
import React from "react";
import MyComponent from './Components/MyComponent';

function App() {
  const [name, setName] = useState('');
  const 
    function handleChange(input) {
    const reversedInput = input.split('').reverse().join('');
    const formattedReversedInput = reversedInput.charAt(0).toUpperCase() + reversedInput.slice(1).toLowerCase();
    setName(formattedReversedInput);
  };

  return (
    <div className="App">
      <h2>Vad blir ditt namn baklänges?</h2>
      <MyComponent />
      <h1>{name}</h1>
      <label htmlFor='nameInput'>Skriv in ditt namn och tryck enter:</label>
      <br />
      <input type="text" id='nameInput' onChange={(event) => handleChange(event.target.value)} />
    </div>
  )
}

export default App
