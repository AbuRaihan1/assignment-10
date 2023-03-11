import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthContext";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="login">
      <form className="login-content" onSubmit={loginHandler}>
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
                  <p>{errorMessage}</p>
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
                <img alt="" src={loginImage} />
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Login;
