import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasketThunk, getBasketThunk, postBasketThunk } from '../redux/reducers/basketSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Admin.scss'
import { Link } from 'react-router';

const Admin = () => {
  const validationSchema = Yup.object().shape({
    price: Yup.string().min(2, 'Invalid price').required('Name is required'),
    title: Yup.string().min(2, 'Title is required').required('Title is required'),
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.basket.basket);
  const loading = useSelector((state) => state.basket.loading);
  const error = useSelector((state) => state.basket.error);

  const formik = useFormik({
    initialValues: {
      price: '',
      title: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(postBasketThunk(values));
      formik.resetForm()
    },
  });

  useEffect(() => {
    dispatch(getBasketThunk());
  }, [dispatch]);

  if (loading) return <span>Loading . . .</span>;
  if (error) return <span>Error</span>;

  return (
    <div className='contain'>
      <Link to='/'>Back to Home Page</Link>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="price">price
        <input        
          id="price"
          name="price"
          type="text"
          placeholder={formik.errors.price || 'Enter your price'}
          {...formik.getFieldProps('price')}
        />
</label>
        <label htmlFor="title">Title
        <input
          id="title"
          name="title"
          type="text"
          placeholder={formik.errors.title || 'Enter your title'}
          {...formik.getFieldProps('title')}
        />
</label>
        <button type="submit">Submit</button>
      </form>
  <div className="cover" style={{width:'100%'}}>
      {data &&
        data.map((item, index) => (
          <div className="container" key={index} style={{width:'100%'}}>
            {item.image ? (
        <img style={{width:'20%'}} className="image" src={item.image} alt={item.title} />
      ) : null}
            <span>{item.title}</span>
            <span>{item.price}</span>
            <button onClick={()=>dispatch(deleteBasketThunk(item._id))}>Delete</button>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Admin;
