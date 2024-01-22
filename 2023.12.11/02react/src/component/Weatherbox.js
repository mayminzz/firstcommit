import React from "react";

const Weatherbox = ({ weather }) => {
  console.log("weather", weather);
  const temperatureC = weather && weather.main.temp;
  const humidity = weather && weather.main.humidity;
  const currentWeather = weather && weather.weather[0]?.description;
  return (
    <div className="weather_box">
      <h1>도시 : {weather?.name}</h1>
      <h2>
        온도 : {temperatureC}도/ 습도: {humidity}
      </h2>
      <h3>현재날씨 : {currentWeather}</h3>
    </div>
  );
};

export default Weatherbox;
