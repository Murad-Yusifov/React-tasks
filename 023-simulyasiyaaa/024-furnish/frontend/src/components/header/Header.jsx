import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <nav>
       <div className="container">
       <div className="logo">
            <h1>Furnish</h1>
        </div>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Collection</li>
            <li>Blog</li>
            <li>Contect</li>
        </ul>
       </div>
    </nav>
  )
}

export default Header