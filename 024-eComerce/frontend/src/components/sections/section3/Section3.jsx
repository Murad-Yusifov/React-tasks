import React, { useEffect } from "react";
import "./Section3.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../redux/reducers/productSlice";

const Section3 = () => {

    const dispatch =useDispatch()
   
      const loading = useSelector(state=>state.products.loading)
    const data = useSelector(state=>state.products.products)
    console.log(data);
    

    useEffect(()=>{
        dispatch(getProductThunk())
    },[dispatch])

    if(loading) return <span>Loading</span>
  return (
    <>
      <div className="wrapper3">
        <div className="head">
          <h1>New realeased Products for Men</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="carts">
  {data &&
    data.map((item) => (
      <div className="cart" key={item.id}>
        <img src={item.image} alt={item.title} />
        <span className="title">{item.title}</span>
        <span>${item.price}</span>
      </div>
    ))}
</div>

      </div>
    </>
  );
};

export default Section3;
