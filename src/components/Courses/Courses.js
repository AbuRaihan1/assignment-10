import React, { useEffect } from "react";
import "./Courses.css";
const Courses = () => {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>Courses</h2>
    </div>
  );
};

export default Courses;
