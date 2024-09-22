import { useState } from 'react';
import './App.css';
import Text from './components/Text';

export default function App() {
  const darkMode = {
    backgroundColor: 'black',
    color: 'white'
  };

  const lightMode = {
    backgroundColor: 'white',
    color: 'black'
  };

  const [mode, setMode] = useState('light');
  const [buttonText, setButtonText] = useState("Dark");

  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark');
      setButtonText("Light");
    } else {
      setMode('light');
      setButtonText("Dark");
    }
  };

  const currentStyle = mode === 'light' ? lightMode : darkMode;

  return (
    <>
      <div className='h-screen w-screen flex flex-col items-center justify-center' style={currentStyle}>
        <button
          onClick={handleToggle}
          className="rounded-md bg-blue-500 px-4 py-2 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          {buttonText} Mode
        </button>
        <Text />
      </div>
    </>
  );
}
