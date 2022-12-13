import React from "react";
import profile from "./assets/me2.jpg";
import linkedIN from "./assets/linkedin.svg";

export default function Info() {
  return (
    <div className="info-section">
      <div className="img-container">
        <img className="profile-photo" src={profile} alt="profile photo" />
      </div>
      <h2 className="name">Abhijeet Gautam</h2>
      <p className="profession">Frontend Developer</p>
      <div className="contact-container">
        <div className="social-logo">
          <img src={linkedIN} alt="linkedIN" />
        </div>
        <p>LinkedIN</p>
      </div>
    </div>
  );
}
