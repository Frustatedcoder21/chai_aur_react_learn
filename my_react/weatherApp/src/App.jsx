import { useState } from 'react';
import './App.css';
import useWeather from './hooks/useWeather';

function App() {
  const [city, setCity] = useState('');
  const { data, error, loading } = useWeather(city);

  const handleSearch = () => {
    setCity(document.getElementById('cityInput').value);
  };

  return (
    <>
      <div className='w-screen h-screen bg-slate-900 relative'>
        <div className='flex justify-center'>
          <h1 className='font-bold text-white text-xl md:text-2xl lg:text-3xl'>Weather - App</h1>
        </div>

        <div className='w-full md:w-3/4 lg:w-1/2 h-1/2 bg-orange-500 absolute top-20 left-1/2 transform -translate-x-1/2 rounded-2xl flex flex-col items-center p-4 md:p-8'>
          <div className='flex flex-col md:flex-row items-center mt-4 md:mt-8'>
            <input
              id="cityInput"
              type="text"
              className='bg-blue-300 rounded-xl w-full md:w-40 h-10 mt-2 md:mt-0 md:mr-4 px-2'
              placeholder='Enter city name'
            />
            <button
              onClick={handleSearch}
              className='bg-red-600 rounded-xl w-full md:w-28 h-10 mt-2 md:mt-0 md:ml-4'
            >
              Search
            </button>
          </div>
          {loading && <p className="text-white mt-4">Loading...</p>}
          {error && <p className="text-white mt-4">Error: {error}</p>}
          {data && (
            <div className="text-white mt-4">
              <p>Temperature: {data.main.temp}°C</p>
              <p>Weather: {data.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
