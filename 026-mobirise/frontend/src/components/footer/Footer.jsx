import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="cover">
        <div className="first">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
            alt=""
          />
          <label htmlFor="connect">
            <input
              placeholder="Enter Your text"
              type="text"
              id="connect"
              className="connected"
              name="connect"
            />
            <button className="btn">Send</button>
          </label>
        </div>
        <ul>
          <li>About</li>
          <li>About Us</li>
          <li>Our Partners</li>
          <li>Our Services</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Contact Us</li>
          <li>FAQ Page</li>
          <li>About Me</li>
        </ul>

        <div className="collect">
          <p>Follow Us</p>
        </div>
        </div>
   
      </div>
    </>
  );
};

export default Footer;
