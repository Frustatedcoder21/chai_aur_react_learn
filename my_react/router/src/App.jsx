import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Lazy load both components
const Landing = lazy(() => import('./components/Landing'));
const About = lazy(() => import('./components/About'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Appwrapper />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Appwrapper() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/about')}>About</button>
    </div>
  );
}

export default App;
