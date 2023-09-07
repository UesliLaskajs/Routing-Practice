import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/color/Hello/red/blue">Text Color</Link>
    </>
  );
};

export default Home;
