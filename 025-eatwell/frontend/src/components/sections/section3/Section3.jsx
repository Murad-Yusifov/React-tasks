import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMealThunk } from "../../../redux/reducers/mealSlice";
import './section3.scss'
const Section3 = () => {
  const dispach = useDispatch();

  const data = useSelector((state) => state.meals.meal);
  const loading = useSelector((state) => state.meals.loading);
  const error = useSelector((state) => state.meals.error);

  console.log(data);

  useEffect(() => {
    dispach(getMealThunk());
  }, []);

  if (loading) return <span>Loading ...</span>;
  if (error) return <span>Error</span>;
  return (
    <div className="wrapper33">
    <div className="map">
    {data && data.map((item) => (
          <div className="carts">
            <div className="imgBox">
              <img src={item.image} alt="" />
            </div>
            <span className="price">${item.price}</span>
            <span>{item.title}</span>
            <span className="desender">{item.description}</span>
            <button className="btn">
              Order Now!
            </button>
          </div>
          
          
        ))}

        
    </div>
    </div>
  );
};

export default Section3;
