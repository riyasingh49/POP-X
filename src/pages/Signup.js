import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <h2>Create your <br />PopX account</h2>

      <div className="input-group">
        <input type="text" placeholder="Marry Doe" required />
        <label>Full Name<span className="required">*</span></label>
      </div>

      <div className="input-group">
        <input type="text" placeholder="Marry Doe" required />
        <label>Phone Number<span className="required">*</span></label>
      </div>

      <div className="input-group">
        <input type="email" placeholder="Marry Doe" required />
        <label>Email Address<span className="required">*</span></label>
      </div>

      <div className="input-group">
        <input type="password" placeholder="Marry Doe" required />
        <label>Password<span className="required">*</span></label>
      </div>

      <div className="input-group">
        <input type="text" placeholder="Marry Doe" required />
        <label>Company Name<span className="required">*</span></label>
      </div>

      <p>Are you an Agency?</p>
      <div className="label">
      <label>
        <input type="radio" name="agency"  defaultChecked/> Yes
      </label>
      <label >
        <input type="radio" name="agency" /> No
      </label>
      </div>
      

      <button className="btn-create" onClick={() => navigate("/Account")}>
        Create Account
      </button>
    </div>
  );
};

export default Signup;
