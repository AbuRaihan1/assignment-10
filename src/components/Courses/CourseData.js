import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Courses.css'
const CourseData = ({ course }) => {
  const { image, isbn13, price, subtitle, title } = course;
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseData;
