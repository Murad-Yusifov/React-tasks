import React from "react";
import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">
            <h2>Floral Studio</h2>
          </div>
          <RxHamburgerMenu className="burger" />

          <ul>
            <li><Link className="link" to="/">Home</Link></li>
            <li>About us</li>
            <li>Portfolio</li>
            <li>
              <Link className="link" to="/basket">Basket</Link>
            </li>
            <li>
              <Link className="link" to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
