import React, { useState } from 'react';
import './App.css';

function App() {

  const handleChange = (event) => {
    event.preventDefault();
  }

  const calculate = function (base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    else {
      return base * calculate(base, exponent - 1);
    }
  };


  return (
    <div className="app">
      <h1>Get The Exponent of a number</h1>
      <div className="inputs">
        <h3>Base : <input onChange={handleChange}></input></h3>
        <h3>Exponent : <input onChange={handleChange}></input></h3>
      </div>
      <div className="button">
        <button onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
