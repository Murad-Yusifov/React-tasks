import React, { useEffect, useState } from 'react';
import './Header.scss';
import { IoCartSharp } from 'react-icons/io5';
import { Link } from 'react-router'; // Düzgün `react-router-dom` istifadə edin
import { useSelector } from 'react-redux';

const Header = () => {
  const [count, setCount] = useState(0);

  const data = useSelector((state) => state.basket.basket); // Redux-dan gələn basket məlumatları

  // `data` dəyişdikcə `count`-u yeniləmək üçün `useEffect` istifadə edin
  useEffect(() => {
    setCount(data.length); // `data.length`-i birbaşa `count`-a təyin edin
  }, [data]);

  return (
    <div className='header'>
      <nav>
        <div className="logo">
          <span>Vegefoods</span>
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li>Shop</li>
          <li><Link to="/wish">Wish</Link></li>
          <li><Link to="/basket">Basket</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
          <li><IoCartSharp /> {'['}{count}{']'}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
