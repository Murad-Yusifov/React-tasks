import React from 'react'
import './Cart.scss'

const Cart = ({image,title}) => {
  return (
    <div className='cart'>
        <div className="imgBox">
            <img src={image} alt="" />
        </div>
        <div className="text">
            <p className='title'>{title}</p>
            <p>Summer Collection</p>
            <p className='price'>$9.50</p>
        </div>
    </div>
  )
}

export default Cart