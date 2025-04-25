import React from "react";
import { FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <nav>
          <h1>Dealers</h1>
          <ul className="text">
            <Link className="link colored" to="/">Collection
                <ul className="subMenu">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Children</li>
                    <li>Sub menu &gt;</li>
                    </ul>            
            </Link>
            <Link className="link" to="/">Shop</Link>
            <Link className="link" to="/">Catalogs</Link>
            <Link className="link" to="/">Contact</Link>
            <Link className="link" to="/admin">Admin</Link>
          </ul>
          <ul>
            <div className="icons">
              <FaUser />
            </div>
            <div className="icons">
              <FaHeart />
            </div>
            <div className="icons">
              <FaShoppingBag />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
