import React, { useEffect, useState } from "react";
import CourseData from "./CourseData";
import "./Courses.css";
const Courses = () => {
  const [courseData, setCourseData] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      {courseData?.map((course, idx) => (
        <CourseData course={course} key={idx} />
      ))}
    </div>
  );
};

export default Courses;
