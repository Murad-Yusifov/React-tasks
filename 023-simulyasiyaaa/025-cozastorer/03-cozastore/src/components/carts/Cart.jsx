import React from "react";
import "./Cart.scss";

const Cart = () => {
  return (
    <div className="wrapped">
      <div className="cart">
        <div className="text">
           <div className="women">
           <p>Women</p>
           <p>Spring 2018</p>
           </div>
            <p className="shop">Shop Now</p>
        </div>
      </div>
      <div className="cart2">
        <div className="text">
           <div className="women">
           <p>Men</p>
           <p>Spring 2018</p>
           </div>
            <p className="shop">Shop Now</p>
        </div>
      </div>
      <div className="cart3">
        <div className="text">
           <div className="women">
           <p>Outfits</p>
           <p>Spring 2018</p>
           </div>
            <p className="shop">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
