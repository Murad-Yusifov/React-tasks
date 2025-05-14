import React from "react";
import './Footer.scss'
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="rowUp">
          <div className="left">
            <p>Subcribe to our Newsletter</p>
            <p className="get">
              Get e-mail updates about our latest shops and special offers
            </p>
          </div>
          <div className="right">
            <label htmlFor="enter">
              <input type="text" id="enter" placeholder="Enter email address" />
              <button className="btn">Subscribe</button>
            </label>
          </div>
        <div className="round">&gt;</div>
        </div>
          
        <div className="rowDown">
          <div className="upper">
            <div className="contain">
              <p>Vegefoods</p>
              <p className="far">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
            <ul>
              <p>Menu</p>
              <li>Shop</li>
              <li>About</li>
              <li>Journal</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <p>Help</p>
              <li>Shipping Information</li>
              <li>Returns & Exchange</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <ul>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </ul>

            <div className="local">
              <p>Have a Questions?</p>
              <div className="same land">

                <FaMapMarkerAlt />

                <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>

              </div>
              <div className="same phone">
                <FaPhoneAlt />
                <span>	+2 392 3929 210</span>


              </div>
              <div className="same mail">
               <IoMdMail />
               <p>	info@yourdomain.com</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
