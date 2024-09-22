import React, { useState, useEffect } from "react";

export default function useWeather(city) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apikey = "e4c18f23ec015b4bb3e3e93bc9e75c3e";
        const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
        const response = await fetch(apiurl);
        
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, error, loading };
}
