import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'

const Header = () => {
  return (
   <>
    <header className='w-full h-[100px] flex justify-center items-center sticky top-0 bg-white'>
        <nav className='w-[90%] flex justify-around'>
            <div className="cursor-pointer">
                <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" />
            </div>
            <ul className='w-[25%] flex justify-around'>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Home</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Shop</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Blog</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Pages</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Contact</li>
            </ul>
            <ul className='w-[14%] flex justify-around '>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiSearch /></li>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiShoppingCart /></li>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiUser /></li>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiHeart /></li>
            </ul>
             </nav>
    </header>
   </>
  )
}

export default Header