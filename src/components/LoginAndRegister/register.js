import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import registerImage from "../../assets/images/signUp.png";
import { AuthContext } from "../../contexts/AuthContext";
const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserName } = useContext(AuthContext);
  const [error, setEror] = useState("");
  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        Swal.fire("Congrats", "you are registerd now", "success");
        updateUserName(name);
        navigate("/");
      })
      .catch((error) => {
        setEror(error.message);
      });
  };
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
              <form onSubmit={registerHandler}>
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
                      placeholder="password"
                      name="password"
                      required
                    />{" "}
                    <p>{error}</p>
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
                <img alt="" src={registerImage} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
