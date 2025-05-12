import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../redux/reducers/basketSlice'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Admin = () => {
  const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
  const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
     },
     validationSchema,
     onSubmit: values => {
      console.log("Submit values", values);
      
       
     },
   });


  const dispatch = useDispatch()

  const data = useSelector(state=>state.basket.basket)
  const loading = useSelector(state=>state.basket.loading)
  const error = useSelector(state=>state.basket.error)
  

  useEffect(()=>{
    dispatch(getBasketThunk())

  }, [dispatch])

  if(loading) return <span>Yukleniyor. . .</span>
  if(error) return <span>Error. . .</span>
  return (
    <div>

      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         {...formik.getFieldProps("firstName")}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         {...formik.getFieldProps("lastName")}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         {...formik.getFieldProps("email")}
       />
       <button type="submit">Submit</button>
     </form>

      {data && data.map(item=>(
        <div className="wrapper">
          <img src={item.image} alt="" />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Admin