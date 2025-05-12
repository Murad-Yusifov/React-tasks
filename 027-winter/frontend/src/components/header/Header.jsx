import React from "react";
import "./Header.scss";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="wrapped">
        <nav>
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/winter/img/logo.png.webp"
              alt=""
            />
          </div>
          <ul className="Table">
            <li>
              Home
            </li>
            <li className="shop">
              Shop
              <ul className="catagory">
                <li>shop category</li>
                <li>product details</li>
              </ul>
            </li>
            <li className="pages">pages
                <ul className="login">
                    <li>login</li>
                    <li>tracking</li>
                    <li>product</li>
                    <li>checkout</li>
                    <li>shopping cart</li>
                    <li>confirmation</li>
                    <li>elements</li>

                </ul>
            </li>
            <li className="blog">blog
                <ul className="single">
                    <li>blog</li>
                    <li>Single blog</li>
                </ul>
            </li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
          <div className="icons">
          <FaBagShopping />
          <FaSearch />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
