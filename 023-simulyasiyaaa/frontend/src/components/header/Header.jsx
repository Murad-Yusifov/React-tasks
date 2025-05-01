import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
    <div className="nav">
       <nav>
       <div className="imgBox">
            <img src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>products</li>
            <li>Blog</li>
            <li>contact</li>
            <li>Dropdown</li>
        </ul>
       </nav>
    </div>
    </>
  )
}

export default Header