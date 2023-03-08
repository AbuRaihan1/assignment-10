import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="login">
      <div className="login-content">
        <h2>Register Here </h2>
        <div className="loginSignUp">
          <Link to="/login">Login</Link>
          <Link to="/register" style={{ background: "#ff5200" }}>
            Sign up
          </Link>
        </div>
        <Container>
          <Row>
            <Col md="6">
              <form>
                <div className="login-content-wrapper">
                  <div className="login-area">
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      required
                    />
                    <input
                      type="password"
                      placeholder="******"
                      name="password"
                      required
                    />{" "}
                    <p>error</p>
                    <button>Register</button>
                    <div className="or-wrapper">or</div>
                  </div>
                </div>
              </form>
              <div className="continue-with-btns">
                <button>Continue with google</button>
                <button>Continue with github</button>
              </div>
            </Col>
            <Col md="6">
              <div className="login-content-wrapper">
                <img alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default register;
