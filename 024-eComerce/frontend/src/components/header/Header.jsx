import React, { useEffect} from 'react';
import './Header.scss';
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketThunk } from '../../redux/reducers/basketSlice';

const Header = () => {

  const dispatch =useDispatch()

  const data = useSelector(state=>state.basket.basket)
  const loading = useSelector(state=>state.basket.loading)

  useEffect(()=>{
    
  dispatch(getBasketThunk())
  },[])

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
          <li><Link className='link' to='/wish'>Wish List</Link></li>
          <li><Link className='link' to='/admin'>Admin  ({loading ? '...' : data.length})</Link></li>
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
