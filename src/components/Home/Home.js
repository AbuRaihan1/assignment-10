import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home_wrapper">
        <div>
          <h1>Tech Leaner</h1>
          <h1>Let's learn from here</h1>
          <div className="buttons">
            <Link to='/blog'>Blog</Link>
            <Link to='/courses'>Courses</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
