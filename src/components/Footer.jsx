import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div style={{ width: "100%" }}>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <p style={{ fontWeight: "bold" }}>
          &copy; Shivandru | Thank You For Viewing My Portfolio | Hire Me
        </p>
      </footer>
    </div>
  );
};

export default Footer;
