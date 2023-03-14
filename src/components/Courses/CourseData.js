import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Courses.css";
const CourseData = ({ course }) => {
  const { image, id, price, subtitle, title } = course;

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={"4"}>
            <div className="course_card">
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <h4>{price}</h4>
              <Link to={`/courses/${id}`}>
                <button>Get started</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseData;
