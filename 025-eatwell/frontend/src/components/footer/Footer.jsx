import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const usefulLinks = ["Foods", "Drinks", "Breakfast", "Brunch", "Dinner"];

  return (
    <div className="footer">
      <div className="cover">
        <div className="up">
          <div className="about">
            <h1 className="that">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              similique, delectus blanditiis odit expedita amet. Sed labore ipsum
              vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?
            </p>
          </div>

          <div className="restraunt">
            <p className="that">The Restaurant</p>
            <p>About Us</p>
            <p>Chefs</p>
            <p>Events</p>
            <p>Contact</p>
          </div>

          <div className="useful">
            <p className="that">Useful links</p>
            {usefulLinks.map((link) => (
              <p key={link}>{link}</p>
            ))}
          </div>

          <div className="links">
            <p className="that">Useful links</p>
            {usefulLinks.map((link) => (
              <p key={link + "2"}>{link}</p>
            ))}
          </div>
        </div>

        <div className="icons">
          <div className="div">
            <FaTwitter className="icon" />
          </div>
          <div className="div">
            <FaFacebookF className="icon" />
          </div>
          <div className="div">
            <FaInstagram className="icon" />
          </div>
        </div>

        <div className="rights">
          <p>
            © Copyright ©2025 All rights reserved | This template is made with{" "}
            <FaHeart /> by Colorlib
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
