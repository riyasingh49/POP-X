import React from "react";
import "./Account.css";
import { FaCamera } from "react-icons/fa";
import images from "../Assets/images.jpeg";

const Account = () => {
  return (
    <div className="account-wrapper">
      <div className="account-box">
        <div className="account-header">
          <h2 className="account-title">Account Settings</h2>
        </div>
        <div className="profile">
          <div className="profile-section">
            <div className="profile-pic-wrapper">
              <img src={images} alt="Profile" className="profile-pic" />
              <div className="camera-icon">
                <FaCamera />
              </div>
            </div>
            <div className="profile-info">
              <h3>Marry Doe</h3>
              <p className="email">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
