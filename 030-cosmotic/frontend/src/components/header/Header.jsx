import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex justify-around">
      <div className="w-[15%] flex items-center justify-around">
        <img className="w-[70px]"
          src="https://mobirise.com/extensions/naturalm4/natural%20cosmetic/assets/images/logo1-1-96x96.png"
          alt=""
        />
        <span className="cursor-pointer font-semibold text-xl">NATURAL COSMETIC</span>
      </div>
      <ul className="w-[25%] flex justify-around items-center">
        <li className="hover:text-yellow-200 transition cursor-pointer text-xl">Home</li>
        <li className="hover:text-yellow-200 transition cursor-pointer text-xl">About US</li>
        <li className="hover:text-yellow-200 transition cursor-pointer text-xl">Shop</li>
        <li className="hover:text-yellow-200 transition cursor-pointer text-3xl"><FaFacebook/></li>
        <li className="hover:text-yellow-200 transition cursor-pointer text-3xl"><FaTwitter/></li>
        <li className="hover:text-yellow-200 transition cursor-pointer text-3xl"><FaInstagram/></li>
      </ul>
    </div>
  );
};

export default Header;
