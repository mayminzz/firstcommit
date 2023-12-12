import "./App.css";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from "react";
import Weatherbox from "./component/Weatherbox";
import WeatherButton from "./component/WeatherButton";

const API_KEY = process.env.React_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(undefined);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
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
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(`data : ${data}`);
    setWeather(data);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeather(data);
    setLoading(false);
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

  const handleCityChange = (city) => {
    if (city === "current") {
      setWeather(getCurrentLocation());
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#88c6b" size={50} loading={loading} />
        </div>
      ) : (
        <div className="container">
          <Weatherbox weather={weather} />
          <WeatherButton
            handleCityChange={handleCityChange}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
