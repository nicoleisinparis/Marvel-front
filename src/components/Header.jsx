import "./Header.css";
import { Link } from "react-router-dom";
import marvelLogo from "../assets/marvel-logo.png";
import React, { useState } from "react";

const Header = () => {
  const [subVisible, setSubVisible] = useState(false); // State variable to control visibility

  // Function to toggle visibility of the subscription field
  const showSubsField = () => {
    setSubVisible(!subVisible);
  };

  return (
    <header className="header">
      <div className="inner-header">
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "200px",
            height: "18px",
            color: "grey",
            backgroundColor: "black",
            border: "1px solid rgb(143, 4, 4)",
          }}
        />
        <Link to="/Home">
          <img
            src={marvelLogo}
            alt="Marvel Logo"
            style={{ width: "220px", height: "150px" }}
          />
        </Link>
        <div className="right-element">
          <div className="right-content">
            <img
              src="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
              alt="Marvel logo"
              style={{ width: "22px", height: "25px" }}
            />
            <p>Marvel Unlimited</p>
          </div>

          <span onClick={showSubsField} style={{ cursor: "pointer" }}>
            Subscribe
          </span>
          <div>
            {subVisible && (
              <input
                className="subscribe-field"
                type="text"
                placeholder="Enter your email & press enter"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
