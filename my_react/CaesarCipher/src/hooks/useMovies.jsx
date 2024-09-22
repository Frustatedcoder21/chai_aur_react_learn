
import { useState, useEffect } from "react";

// Custom hook to fetch movies
export default function useMovies(searchTerm) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchTerm) return; // Prevent fetching if searchTerm is empty

      setLoading(true);
      setError(null);

      try {
        const url = `http://www.omdbapi.com/?apikey=8113095e&s=${encodeURIComponent(searchTerm)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return { movies, error, loading };
}
