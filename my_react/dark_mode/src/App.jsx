import { useState } from 'react';
import './App.css';

function App() {
  const [background, setBackground] = useState("black");

  function setterDark() {
    if (background === "white") {
      setBackground("black");
    }
  }

  function setterLight() {
    if (background === "black") {
      setBackground("white");
    }
  }

  return (
    <div className="h-screen w-screen" style={{ backgroundColor: background }}>
      <button
        onClick={setterDark}
        type="button"
        className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Set Dark
      </button>
      <button
        onClick={setterLight}
        type="button"
        className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Set Light
      </button>
    </div>
  );
}

export default App;
