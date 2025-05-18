import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketThunk } from '../../redux/reducers/basketSlice';

const Admin = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.basket.basket);
  const loading = useSelector(state => state.basket.loading);
  const error = useSelector(state => state.basket.error);

  console.log(data);
  

  useEffect(() => {
    dispatch(getBasketThunk());
  }, []);

  if (loading) return <span>Loading. . .</span>;
  if (error) return <span>Error</span>;

  return (
    <div>
      {data && data.map(item => (
        <div key={item._id || item.id}> {/* _id yoxdursa id istifadə et */}
          <img src={item.image} alt={item.title || "Basket item"} />
        </div>
      ))}
    </div>
  );
};

export default Admin;
