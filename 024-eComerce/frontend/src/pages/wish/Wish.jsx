import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Wish = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(storedWishList);
  }, []);

  const removeFromWishList = (_id) => {
    const updatedWishList = wishList.filter((item) => item._id !== _id);
    localStorage.setItem("wish", JSON.stringify(updatedWishList));
    setWishList(updatedWishList);
  };

  return (
    <div>
      <Link to={'/'}>Back  to Home</Link>
      {wishList.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <ul style={{width:'120px'}}>
          {wishList.map((item) => (
            <li style={{width:'100%'}} key={item._id}>
              <img style={{width:"100%"}} src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromWishList(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wish;
