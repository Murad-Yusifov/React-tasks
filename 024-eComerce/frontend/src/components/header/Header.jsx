import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router';

const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("wish")) || [];
    const totalItems = wishList.reduce((acc, item) => acc + (item.count || 1), 0);
    setCount(totalItems);
  }, []);

  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="Logo" />
        </div>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/category'>Category</Link></li>
          <li><Link className='link' to='/men'>Men</Link></li>
          <li><Link className='link' to='/women'>Women</Link></li>
          <li><Link className='link' to='/wish'>Wish List ({count})</Link></li>
          <li><Link className='link' to='/admin'>Admin</Link></li>
        </ul>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
