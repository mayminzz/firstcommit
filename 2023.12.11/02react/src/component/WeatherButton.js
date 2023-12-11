import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButton = ({ cities, setCity }) => {

  console.log(`cities`, cities);
  return (
    <div>
      <Button variant="danger">Current Location</Button>
      {cities.map((it) => (
        <Button onClick={() => setCity(it)} variant="danger">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
