import React, { useEffect, useState } from "react";
import "./Section3.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../redux/reducers/productSlice";
import { postBasketThunk } from "../../../redux/reducers/basketSlice";

const Section3 = () => {
  const [wish, setWish] = useState([]);

  // İlk olaraq localStorage-dan "wish" məlumatını yükləyirik
  useEffect(() => {
    const savedWish = JSON.parse(localStorage.getItem("wish")) || [];
    setWish(savedWish);
  }, []);

  // `wish` dəyişəni dəyişildikdə localStorage-a yazırıq
  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  // Add to Wish funksiyası
  const addToWish = (item) => {
    const existingItem = wish.find((x) => x._id === item._id);

    if (existingItem) {
      // Mövcud element varsa, count-u artırırıq
      const updatedWish = wish.map((x) =>
        x._id === item._id ? { ...x, count: x.count + 1 } : x
      );
      setWish(updatedWish);
      localStorage.setItem("wish", JSON.stringify(updatedWish));
    } else {
      // Mövcud deyilsə, count: 1 ilə əlavə edirik
      const newWish = [...wish, { ...item, count: 1 }];
      setWish(newWish);
      localStorage.setItem("wish", JSON.stringify(newWish));
    }
  };

  // Remove from Wish funksiyası
  const removeFromWish = (itemId) => {
    const updatedWish = wish.filter((item) => item._id !== itemId);
    setWish(updatedWish);
    localStorage.setItem("wish", JSON.stringify(updatedWish));
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
                <button onClick={() => removeFromWish(item._id)}>
                  Remove From Wish List
                </button>
              </div>
            ))}
        </div>

        <div className="wishlist">
          <h2>Wish List</h2>
          {wish.map((item) => (
            <div key={item._id} className="wish-item">
              <span>{item.title}</span>
              <button onClick={() => removeFromWish(item._id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
