import React, { useEffect } from "react";
import "./Section4.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductThunk } from "../../../redux/reducers/flowerSlice";
import { postBasketThunk } from "../../../redux/reducers/basketSlice";

const Section4 = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.product);
  console.log(data);

  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  const hanldeAddToBasket = (item) => {
    dispatch(postBasketThunk(item));
  };

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error</span>;
  return (
    <>
      <div className="wrapper4">
        {data &&
          data.map((item) => (
            <div className="cart">
              <div className="imgBox">
                <img className="image" src={item.image} alt="" />
              </div>
              <p className="title">{item.title}</p>
              <p className="price">${item.price}</p>
              <button
                className="btn"
                onClick={() => {
                  const newItem = {
                    image: item.image,
                    title: item.title,
                    price: item.price,
                  };
                  dispatch(postBasketThunk(newItem)); // Datanı göndərir
                }}
              >
                Add to Basket
              </button>
            </div>
          ))}

        {data &&
          data.map((item) => (
            <div className="cart">
              <div className="imgBox">
                <img className="image" src={item.image} alt="" />
              </div>
              <p className="title">{item.title}</p>
              <p className="price">${item.price}</p>
              <button className="btn" onClick={() => hanldeAddToBasket(item)}>
                Add to Basket
              </button>
            </div>
          ))}
      </div>

      <div className="under">
        <div className="text">
          <p>Devoted to wonderful beauty</p>
          <h1>Events Pricing</h1>
        </div>
        <div className="cart1">
          <div className="carts">
            <p className="table">
              <span>$16 </span> per table
            </p>
            <p>Birthday Events</p>
            <p className="lorem">
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <button className="btn">Shop Now</button>
          </div>
          <div className="carts">
            <p className="table">
              <span>$16 </span> per table
            </p>
            <p>Birthday Events</p>
            <p className="lorem">
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <button className="btn">Shop Now</button>
          </div>
          <div className="carts">
            <p className="table">
              <span>$16 </span> per table
            </p>
            <p>Birthday Events</p>
            <p className="lorem">
              Lorem ipsum dolor sit amet laudem partem perfecto per
            </p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
