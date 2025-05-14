import React from 'react'
import './Section.scss'
import { FaCarrot, FaMedal, FaTruck } from 'react-icons/fa'
import { FaHeartCircleCheck } from 'react-icons/fa6'

const Section2 = () => {
  return (
    <>
    <div className='wrapper1'>
      <div className="icons">
        <div className="contain">
          <FaTruck className='icon' />
          <p className='free'>Free Shipping</p>
          <p className='on'>On order over $100</p>
        </div>
         <div className="contain">
          <FaCarrot className='icon' />
          <p className='free'>Free Shipping</p>
          <p className='on'>On order over $100</p>
        </div>
         <div className="contain">
          <FaMedal className='icon' />
          <p className='free'>Free Shipping</p>
          <p className='on'>On order over $100</p>
        </div>
        <div className="contain">
          <FaHeartCircleCheck  className='icon'/>
          <p className='free'>Free Shipping</p>
          <p className='on'>On order over $100</p>
        </div>
        </div>

      </div>
    
    </>
  )
}

export default Section2