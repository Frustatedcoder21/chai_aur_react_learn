import React, { useState } from 'react';
import math from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = math.evaluate(input);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <input type="text" value={input} readOnly style={styles.input} />
        <div style={styles.result}>{result}</div>
      </div>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={handleClear}>AC</button>
        <button style={styles.button} onClick={() => handleClick('/')}>/</button>
        <button style={styles.button} onClick={() => handleClick('*')}>*</button>
        <button style={styles.button} onClick={() => handleClick('-')}>-</button>
        <button style={styles.button} onClick={() => handleClick('7')}>7</button>
        <button style={styles.button} onClick={() => handleClick('8')}>8</button>
        <button style={styles.button} onClick={() => handleClick('9')}>9</button>
        <button style={styles.button} onClick={() => handleClick('+')}>+</button>
        <button style={styles.button} onClick={() => handleClick('4')}>4</button>
        <button style={styles.button} onClick={() => handleClick('5')}>5</button>
        <button style={styles.button} onClick={() => handleClick('6')}>6</button>
        <button style={styles.button} onClick={handleCalculate}>=</button>
        <button style={styles.button} onClick={() => handleClick('1')}>1</button>
        <button style={styles.button} onClick={() => handleClick('2')}>2</button>
        <button style={styles.button} onClick={() => handleClick('3')}>3</button>
        <button style={{ ...styles.button, ...styles.zero }} onClick={() => handleClick('0')}>0</button>
        <button style={styles.button} onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
}

export default App;

const styles = {
  calculator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto',
    width: '300px',
    backgroundColor: '#333',
    borderRadius: '10px',
    padding: '20px',
  },
  display: {
    backgroundColor: '#222',
    color: 'white',
    fontSize: '2rem',
    padding: '10px',
    width: '100%',
    textAlign: 'right',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  input: {
    width: '100%',
    border: 'none',
    background: 'none',
    color: 'white',
    fontSize: '2rem',
    textAlign: 'right',
    marginBottom: '5px',
  },
  result: {
    fontSize: '1.5rem',
    color: '#888',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '100%',
  },
  button: {
    padding: '20px',
    fontSize: '1.5rem',
    backgroundColor: 'orange',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  zero: {
    gridColumn: 'span 2',
  },
};
