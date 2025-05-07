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
                <li><Link className='link link1' path="/">Home</Link></li>
                <li><Link className='link' path="/">About</Link></li>
                <li><Link className='link' path="/">Offer</Link></li>
                <li><Link className='link' path="/">Menu</Link></li>
                <li><Link className='link' path="/">News</Link></li>
                <li><Link className='link' path="/">Gallery</Link></li>
                <li><Link className='link' path="/admin">Contect</Link></li>
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