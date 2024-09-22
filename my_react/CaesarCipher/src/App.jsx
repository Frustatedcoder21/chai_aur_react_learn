import { useState } from 'react';
import useMovies from './hooks/useMovies';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, error, loading } = useMovies(searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.elements.search.value);
  };

  return (
    <div className='h-full w-screen bg-blue-950'>
      <div className='bg-black h-11'>
        <header>
          <nav className='flex justify-between'>
            <p className='text-blue-50 font-extrabold mt-4'>MoviesBay</p>
            <div className='mt-3'>
              <form onSubmit={handleSearch}>
                <input 
                  name="search"
                  type="text"
                  className='rounded-md mr-2'
                  placeholder='Movies, Shows..'
                />
                <button 
                  type='submit'
                  className='text-white border-2 border-white rounded-md bg-blue-700'
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </header>
      </div>
      <div className='w-screen h-6 bg-slate-800 flex justify-end'>
        <p className='mr-2'>Movies</p>
        <p className='mr-2 ml-2'>Shows</p>
      </div>
      <div className='p-4'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies.length > 0 && (
          <div className='flex flex-wrap gap-4'>
            {movies.map(movie => (
              <div key={movie.imdbID} className='w-48'>
                <img 
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} 
                  alt={movie.Title} 
                  className='w-full h-auto rounded-md'
                />
                <p className='mt-2 text-white'>{movie.Title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
