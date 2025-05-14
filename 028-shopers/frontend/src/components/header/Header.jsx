import React from "react";
import "./Header.scss";
import { FaCartArrowDown, FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div  className="header">
        <nav>
          <label htmlFor="search">
            <FaSearch/>
            <input type="text" placeholder="Search" />

          </label>
          <div className="logo">
            <p>Shoppers</p>
          </div>
          <div className="icons">
            <FaUser/>
            <FaHeart/>
            <FaCartArrowDown/>
          </div>

        </nav>
      </div>
    </>
  );
};

export default Header;
