import React from "react";
import "./Footer.scss";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="up">
          <ul className="catalog">
            <li>
              <h3>Category</h3>
            </li>
            <li>Male</li>
            <li>Female</li>
            <li>Shoes</li>
            <li>Fashion</li>
          </ul>
          <ul className="company">
            <li>
              <h3>Company</h3>
            </li>
            <li>Male</li>
            <li>Female</li>
            <li>Shoes</li>
            <li>Fashion</li>
          </ul>
          <ul className="adress">
            <li>
              <h3>Address</h3>
            </li>
            <li>Male</li>
            <li>Female</li>
            <li>Shoes</li>
            <li>Fashion</li>
          </ul>
          <ul className="input">
            <li>
              <h3>Newsletter</h3>
            </li>
            <li>
              <label htmlFor="text">
                <input type="email" placeholder="Email Adress" />
                <button className="btn">Subscribe</button>
              </label>
            </li>
            <li className="icons">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="down">
            <hr className="line" />
            <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart/> by Colorlib</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
