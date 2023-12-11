import "./App.css";
import { useState, useEffect } from "react";
import Weatherbox from "./component/Weatherbox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const cities = ["Paris", "New York", "Tokyo", "Seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      // console.log(`현재위치, ${lat}, ${lon}`);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb3eab17c7a739eb0e32eb9644e7781f&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(`data : ${data}`);
    setWeather(data);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb3eab17c7a739eb0e32eb9644e7781f&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeather(data);
  };
  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
    // console.log(city);
    getWeatherByCity();
  }, [city]);
  return (
    <div className="container">
      <Weatherbox weather={weather} />
      <WeatherButton cities={cities} setCity={setCity} />
    </div>
  );
}

export default App;
