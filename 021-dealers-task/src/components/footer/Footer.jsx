import React from "react";
import "./Footer.scss";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaHeart, FaMailBulk } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footWrapper">
        <div className="texts">
        <div className="about">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae
            reiciendis distinctio voluptates sed dolorum excepturi iure eaque,
            aut unde.
          </p>
          <p className="sbc">Subscribe</p>

          <label htmlFor="name">
            <input type="text" id="name " placeholder="Email" className="input" />
            <div className="send">SEND</div>
          </label>
        </div>
        <div className="quickLinks">
          <div className="first">
           <h3>Quick Links</h3>
           <div className="text">
            <p>Sell online</p>
            <p>Features</p>
            <p>Shopping cart</p>
            <p>Store builder</p>
           </div>
          </div>
          <div className="second">
            <div className="text">
            <p>Mobile commerce</p>
            <p>Dropshipping</p>
            <p>Website</p>
            <p>Development</p>
            </div>
          </div>
          <div className="third">
           <div className="text">
           <p>Point of sale</p>
            <p>Hardware</p>
            <p>Software</p>
           </div>
          </div>
        </div>
        <div className="contact">
            <h3>Contect Info</h3>
            <div className="texts">
            <div className="fakeStore"><IoIosMail className="icon mail"/><p>203 Fake St. Mountain View, San Francisco, California, USA</p></div>
          <div className="fakeStore phone"><FaPhoneFlip className="icon"/><p> +2 392 3929 210</p></div>
          <div className="fakeStore"><FaMailBulk className="icon"/><p>emailaddress@domain.com</p></div>
            </div>
          
         
        </div>
        </div>
        <div className="compyrights">
            <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart/> by Colorlib</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
