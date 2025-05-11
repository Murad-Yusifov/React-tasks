import React from 'react'
import './Header.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='wrapper'>
        <nav>
            <div className="logo">
            <p>EatWell</p>
            </div>

            <ul className='visible'> 
                <li><Link className='link link1' to="/">Home</Link></li>
                <li><Link className='link' to="/">About</Link></li>
                <li><Link className='link' to="/">Offer</Link></li>
                <li><Link className='link' to="/">Menu</Link></li>
                <li><Link className='link' to="/">News</Link></li>
                <li><Link className='link' to="/basket">Basket</Link></li>
                <li><Link className='link' to="/admin">Admin</Link></li>
            </ul>

            <div className="menu">
              <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>MENU</p>
            </div>
        </nav>
        
    </div>
  )
}

export default Header