import React from 'react'
import './Header.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
    <div className="wrapper">
        <nav>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
            </div>
            <ul>
                <li><Link className='link' to='/'>Home</Link></li>
                <li><Link className='link' to='*'>Catagory</Link></li>
                <li><Link className='link' to='*'>Men</Link></li>
                <li><Link className='link' to='*'>Women</Link></li>
                <li><Link className='link' to='*'>Latest</Link></li>
                <li><Link className='link' to='/admin'>Admin</Link></li>
            </ul>
            <div className="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Header