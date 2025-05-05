import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <nav>
          <ul>
            <div className="logo">
                    <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png.webp" alt="" />
            </div>
            
                <li>Home</li>
                <li>Shop</li>
                <li className="feature">Features <span className="hot">HOT</span></li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>


            <ul>
           <div className="icons">
           <div className="search">
            <FaSearch />            
            </div>
           <div className="cart">
           <FaCartShopping/>
            <span>2</span>
           </div>
            <div className="heart">
            <CiHeart />
            <span>0</span>
            </div>
           </div>



            </ul>


        </nav>
      </div>
    </>
  );
};

export default Header;
