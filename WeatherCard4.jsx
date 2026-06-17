function WeatherCard({ weather }) {
  return (
    <div className="card" data-aos="fade-up">
      <h2>{weather.name}</h2>

      <p>🌡 Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌥 Condition: {weather.weather[0].main}</p>
    </div>
  );
}

export default WeatherCard;