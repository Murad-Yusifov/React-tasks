import React from 'react'
import './Header.scss'
import { IoCartSharp } from 'react-icons/io5'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <div className="logo">
        <span>
          Vegefoods
        </span>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shop</li>
        <li>About</li>
        <li>Blog</li>
        <li><Link to='/admin'>Admin</Link></li>
        <li><IoCartSharp />[0]</li>
      </ul>
      </nav>
    </div>
  )
}

export default Header