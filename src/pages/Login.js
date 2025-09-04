import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <h2>
        Signin to your <br /> PopX account
      </h2>
      <p>Lorem ipsum dolor sit amet,</p>
      <p> consectetur adipisicing elit.</p>

      <div className="input-group">
        <input type="email" placeholder="Enter email address" required />
        <label>Email Address </label>
      </div>

      <div className="input-group">
        <input type="password" placeholder="Enter password" required />
        <label>Password </label>
      </div>

      <button className="btn-login" onClick={() => navigate("/Account")}>
        Login
      </button>
    </div>
  );
};

export default Login;
