import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_API_KEY"; // 🔴 Replace this

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🌤️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;