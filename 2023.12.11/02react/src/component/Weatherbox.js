import React from "react";

const Weatherbox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div className="weather_box">
      <h1>도시 : {weather.name}</h1>
      <h2>
        온도 : {weather.main.temp}도 / 습도 : {weather.main.humidity}도
      </h2>
      <h3>현재날씨 : {weather.weather[0].main}</h3>
    </div>
  );
};

export default Weatherbox;
