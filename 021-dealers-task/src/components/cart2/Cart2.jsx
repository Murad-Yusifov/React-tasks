import React from 'react'
import './Cart2.scss'

const Cart2 = ({image, title}) => {
  return (
    <div className='cart2'>
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

export default Cart2