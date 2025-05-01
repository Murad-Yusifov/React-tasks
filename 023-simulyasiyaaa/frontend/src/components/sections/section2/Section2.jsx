import React, { useEffect } from 'react';
import './Section2.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/reducers/productSlice';

const Section2 = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.product.product);
  const loading = useSelector(state => state.product.loading);
  const error = useSelector(state => state.product.error);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  if (loading) return <span>Yukleniyor...</span>;
  if (error) return <span>Hata: {error}</span>;

  return (
    <div className='wrapper'>
        
        <div className="text">
            <h1>Featured Robotics Products to Show</h1>
            <p>Who are in extremely love with eco friendly system.</p>
            </div>
        <div className="container">
            
      {data && data.map(item => (
        <div className="cart" key={item._id}>
          <div className="imgic">
            <img src={item.image} alt={item.title} />
          </div> 
           <span>{item.title}</span>
            <span>{item.description}</span>
            <button className='btn'>View Details</button>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default Section2;
