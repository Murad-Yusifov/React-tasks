import React from 'react'
import './Section2.scss'
import Cart from '../../cart/Cart'


const Section2 = () => {
  return (
    <div className="wrapper2" >
      <Cart image="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" title="The Shoe"/>
      <Cart image="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" title="Marc Jacobs Bag"/>
      <Cart image="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" title="The Belt"/>

      <Cart image="https://preview.colorlib.com/theme/dealers/images/product_1.jpg" title="The Shoe"/>
      <Cart image="https://preview.colorlib.com/theme/dealers/images/product_2.jpg" title="Marc Jacobs Bag"/>
      <Cart image="https://preview.colorlib.com/theme/dealers/images/product_3.jpg" title="The Belt"/>


    </div>
  )
}

export default Section2