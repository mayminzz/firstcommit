import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default Home;
