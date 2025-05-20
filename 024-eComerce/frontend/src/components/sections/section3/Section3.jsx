import React, { useEffect, useState } from "react";
import "./Section3.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../redux/reducers/productSlice";
import { postBasketThunk } from "../../../redux/reducers/basketSlice";

const Section3 = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const storedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setWish(storedWish); // Əvvəlcə localStorage-dakı məhsulları yükləyirik
  }, []);

  const addToWish = (product) => {
    const existingWish = wish.find((item) => item._id === product._id);

    if (existingWish) {
      alert("Product is already in the wishlist");
    } else {
      const updatedWish = [...wish, product];
      setWish(updatedWish);
      localStorage.setItem("wish", JSON.stringify(updatedWish));
    }
  };


    const removeFromWishList = (_id) => {
    const updatedWishList = wishList.filter((item) => item._id !== _id);
    localStorage.setItem("wish", JSON.stringify(updatedWishList));
    setWishList(updatedWishList);
  };

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const data = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  if (loading) return <span>Loading</span>;
  if (error) return <span>Error</span>;

  return (
    <>
      <div className="wrapper3">
        <div className="head">
          <h1>New Released Products for Men</h1>
          <p>Who are in extremely love with eco-friendly system.</p>
        </div>

        <div className="carts">
          {data &&
            data.map((item) => (
              <div className="cart" key={item._id}>
                <img src={item.image} alt={item.title} />
                <span className="title">{item.title}</span>
                <button onClick={() => dispatch(postBasketThunk(item))}>
                  Add to Basket
                </button>
                <button onClick={() => addToWish(item)}>Add To Wish List</button>
                <button onClick={() => removeFromWishList(item._id)}>
                  Remove From Wish List
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
