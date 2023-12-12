import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoProductpage = () => {
    navigate("/product?q=pants");
  };
  return (
    <div>
      <div>Home Page</div>
      <Link to="/about">Go to About Page</Link>
      <button onClick={gotoProductpage}>Go to Product Page</button>
    </div>
  );
};

export default Home;
