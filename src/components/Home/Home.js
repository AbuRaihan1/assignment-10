import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Image src="https://via.placeholder.com/500x300" fluid />
          </Col>
          <Col md={6}>
            <h1>Welcome to My Learning Website</h1>
            <p>
              Here you can find a variety of courses to help you learn new
              skills and advance your career.
            </p>
            <p>Check out our course offerings and start learning today!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
