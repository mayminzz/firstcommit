import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About Page</div>
      <button onClick={gotoHomepage}>Go to Home Page</button>
    </div>
  );
};

export default About;