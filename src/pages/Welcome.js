import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
          <h2 className="welcome-title">Welcome to PopX</h2>
          <p className="welcome-subtitle">Lorem ipsum dolor sit amet</p>
          <p className="welcome-subtitle">consectetur adipisicing elit.</p>
          <button className="btn-primary" onClick={() => navigate("/signup")}>
            Create Account
          </button>
          <button className="btn-secondary" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
      </div>
    </div>
  );
};

export default Welcome;
