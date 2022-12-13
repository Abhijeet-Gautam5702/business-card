import React from "react";
import github from "./assets/github.svg";
import twitter from "./assets/twitter.svg";
import email from "./assets/envelope-solid.svg";

export default function Footer() {
  return (
    <div className="footer-section">
        <img className="footer-social" src={github} alt="github" />
        <img className="footer-social" src={twitter} alt="twitter" />
        <img className="footer-social" src={email} alt="email" />
    </div>
  );
}
