import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Header.css";
const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <h2 className="nav-logo">Tech learner</h2>
        <div className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
            to="/Faq"
          >
            Faq
          </NavLink>
          {user?.uid ? (
            <>
              <NavLink
                style={{
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                  marginRight: "5px",
                }}
              >
                {" "}
                welcome, {user?.displayName}
              </NavLink>
              <Link to="#" className="login_btn" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="login_btn">
              login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
