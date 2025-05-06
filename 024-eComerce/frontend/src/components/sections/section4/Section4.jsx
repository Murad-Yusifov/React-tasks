import React, { useEffect } from "react";
import "./Section4.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../redux/reducers/productSlice";

const Section4 = () => {

    const dispatch =useDispatch()

    const data = useSelector(state=>state.products.products)
    const loading = useSelector(state=>state.products.loading)
    const error = useSelector(state=>state.products.error)

    console.log(data);
    

    useEffect(()=>{
        dispatch(getProductThunk())
    },[dispatch])

    if(loading) return <span>Yukleniyor...</span>
    if(error) return <span>Tapilmadi</span>
  return (
    <>
      <div className="wrapper4">
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

export default Section4;
