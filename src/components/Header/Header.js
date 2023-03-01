import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <h2 className="nav-logo">Tech learner</h2>
        <div className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} to="/courses">Courses</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} to="/blog">Blog</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : undefined)} to="/Faq">Faq</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
