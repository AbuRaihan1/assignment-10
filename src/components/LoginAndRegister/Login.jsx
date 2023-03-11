import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImage from "../../assets/images/login.png";
import { AuthContext } from "../../contexts/AuthContext";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userEmail, setUserEmail] = useState();
  const { login, forgotPassword } = useContext(AuthContext);
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
  const resetPasswordHandle = () => {
    forgotPassword(userEmail)
      .then((res) => {
        Swal.fire(
          "Reset password",
          "Check your email, for reset your password",
          "info"
        );
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
                    onBlur={(e) => setUserEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                  />{" "}
                  <p>{errorMessage}</p>
                  <Link to="#" onClick={resetPasswordHandle}>
                    Forget password?
                  </Link>
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
