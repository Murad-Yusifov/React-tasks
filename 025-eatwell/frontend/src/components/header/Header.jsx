import React, { useEffect} from 'react'
import './Header.scss'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'

const Header = () => {

  const dispatch = useDispatch()

  const data = useSelector(state=>state.basket.basket)

   

  useEffect(()=>{
    dispatch(getBasketThunk())
   
  },[dispatch])




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
                <li><Link className='link' to="/basket">Basket  {data ? data.length : 0}</Link></li>
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