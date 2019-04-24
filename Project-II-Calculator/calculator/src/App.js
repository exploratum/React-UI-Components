import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const App = () => {
  return (
    <div>
      <CalculatorDisplay text = '0' />
      <ActionButton text = 'clear'/>
      <NumberButton text = '/' style = 'btn-operation' />
      <NumberButton text = '7' style = 'btn-number' />
      <NumberButton text = '8' style = 'btn-number' />
      <NumberButton text = '9' style = 'btn-number' />
      <NumberButton text = 'X' style = 'btn-operation'  />
      <NumberButton text = '4' style = 'btn-number' />
      <NumberButton text = '5' style = 'btn-number' />
      <NumberButton text = '6' style = 'btn-number' />
      <NumberButton text = '-' style = 'btn-operation' />
      <NumberButton text = '1' style = 'btn-number'/>
      <NumberButton text = '2' style = 'btn-number' />
      <NumberButton text = '3' style = 'btn-number' />
      <NumberButton text = '+' style = 'btn-operation' />
      <ActionButton text = '0'/>
      <NumberButton text = '=' style = 'btn-operation' />

    </div>
  );
};

export default App;
