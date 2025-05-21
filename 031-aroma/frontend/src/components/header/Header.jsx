import React from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';

const Header = () => {
  return (
    <header className='w-full h-[100px] flex justify-center items-center z-50 bg-white fixed top-0 left-0 shadow-md'>
      <nav className='w-[90%] flex justify-around'>
        <img 
          className='w-[100px] cursor-pointer' 
          src="https://preview.colorlib.com/theme/aroma/img/logo.png" 
          alt="Logo" 
        />
        <ul className='w-[25%] flex justify-around'>
          <li className='hover:text-purple-400 text-xl transition cursor-pointer text-purple-600'>Home</li>
          <li className='hover:text-purple-400 text-xl transition cursor-pointer'>Shop</li>
          <li className='hover:text-purple-400 text-xl transition cursor-pointer'>Blog</li>
          <li className='hover:text-purple-400 text-xl transition cursor-pointer'>Pages</li>
          <li className='hover:text-purple-400 text-xl transition cursor-pointer'>Contact</li>
        </ul>
        <ul className='w-[15%] flex justify-around items-center text-center'>
          <li className='hover:text-purple-400 text-3xl transition cursor-pointer'><CiSearch /></li>
          <li className='hover:text-purple-400 text-3xl transition cursor-pointer'><CiShoppingCart /></li>
          <li className='w-[45%] h-[40px] border border-gray-400 rounded-3xl hover:border-blue-300 transition text-2xl cursor-pointer text-center flex items-center justify-center'>Buy Now</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
