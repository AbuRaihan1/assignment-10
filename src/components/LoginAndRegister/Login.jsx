import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './login.css'
const Login = () => {
  return (
    <div className="login">
      <form className="login-content">
        <h2>Login Here </h2>
        <div className="loginSignUp">
          <Link to="/login" style={{ background: "#ff5200" }}>
            Login
          </Link>
          <Link to="/register">Sign up</Link>
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="login-content-wrapper">
                <div className="login-area">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                  />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                  />{" "}
                  <p>'error'</p>
                  <Link to="#">Forget password?</Link>
                  <button>Log in </button>
                  <div className="or-wrapper">or</div>
                  <div className="continue-with-btns">
                    <button>Continue with google</button>
                    <button>Continue with github</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="login-content-wrapper">
                <img alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Login;
