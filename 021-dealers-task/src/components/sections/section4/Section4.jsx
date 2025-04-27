import React from 'react'
import './Section4.scss'
import Cart2 from '../../cart2/Cart2'

const Section4 = () => {
  return (
    <>
    <div className='wrapper4'>
      <div className="container">
      <Cart2 image="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" title="The Shoe"/>
      <Cart2 image="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" title="Marc Jacobs Bag"/>
      <Cart2 image="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" title="The Belt"/>
      <Cart2 image="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" title="The Shoe"/>
      <Cart2 image="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" title="Marc Jacobs Bag"/>
      <Cart2 image="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" title="The Belt"/>
      </div>
    </div>
        
    </>
  )
}

export default Section4