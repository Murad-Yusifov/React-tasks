import React from "react";
import "./Section3.scss";
import { CiFaceSmile, CiHeart } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Section3 = () => {
  return (
    <>
      <div className="wrapper3">
        <div className="top">
          <div className="left">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
              dicunt an, ea civibus.
            </p>
            <button className="btn">Read more</button>
          </div>
          <div className="right">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="bottom">
          <div className="row">
            <div className="smile one">
              <div className="above">
                <CiFaceSmile />
                <p>Happiness</p>
              </div>
              <div className="low">
                <p>Vis ne postulant principes accommodare ius modo</p>
              </div>
            </div>

            <div className="heart one">
              <div className="above">
                <CiHeart />
                <p>Happiness</p>
              </div>
              <div className="low">
                <p>Vis ne postulant principes accommodare ius modo</p>
              </div>
            </div>
            <div className="sun  one">
              <div className="above">
                <IoSunnyOutline />
                <p>Happiness</p>
              </div>
              <div className="low">
                <p>Vis ne postulant principes accommodare ius modo</p>
              </div>
            </div>
            <div className="shop  one">
              <div className="above">
                <FiShoppingCart />
                <p>Happiness</p>
              </div>
              <div className="low">
                <p>Vis ne postulant principes accommodare ius modo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
