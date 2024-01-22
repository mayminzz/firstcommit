import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  console.log(`cities : ${cities}`);
  return (
    <div>
      <Button onClick={() => handleCityChange("current")} variant="danger">
        Current Location
      </Button>
      {cities.map((it) => (
        <Button onClick={() => setCity(it)} variant="danger">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

