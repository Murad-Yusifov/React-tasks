import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMealThunk } from "../../../redux/reducers/mealSlice";
import './section3.scss'
import { addToBasketAsync } from "../../../redux/reducers/basketSlice";
const Section3 = () => {
  const dispatch = useDispatch();


  const data = useSelector((state) => state.meals.meal);
  const loading = useSelector((state) => state.meals.loading);
  const error = useSelector((state) => state.meals.error);

  

  useEffect(() => {
    dispatch(getMealThunk());
  }, [dispatch]);

  if (loading) return <span>Loading ...</span>;
  if (error) return <span>Error</span>;
  return (
    <div className="wrapper33">
    <div className="map">
    {data && data.map((item) => (
          <div className="carts" key={item._id || item.id}>
            <div className="imgBox">
              <img src={item.image} alt="" />
            </div>
            <span className="price">${item.price}</span>
            <span>{item.title}</span>
            <span className="desender">{item.description}</span>
            <button className="btn" onClick={() => dispatch(addToBasketAsync(item))}>
              Add to Basket
            </button>
          </div>
          
          
        ))}

        
    </div>
    </div>
  );
};

export default Section3;
