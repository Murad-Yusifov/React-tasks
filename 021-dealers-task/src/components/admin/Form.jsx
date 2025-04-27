import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { postCatagorytThunk } from '../../redux/reducers/catagorySlice';
import './Form.scss'

const Form = () => {
  const dispatch = useDispatch()


    const validationSchema =Yup.object({
        name:Yup.string()
        .min(2, "Name is too short")
        .required("Name is required"),
        description:Yup.string()
        .min(2,"Too short")
        .required("Description must be written"),

    })

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values,{resetForm}) => {
      await dispatch(postCatagorytThunk(values))
      resetForm()
    },
  });
  return (
  <div>
    <form onSubmit={formik.handleSubmit} className='form'>
      
       <label htmlFor="name">Add name
      <input
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
      />
     </label>
      <label htmlFor="description">Add description
      <input
        id="description"
        name="description"
        type="text"
        {...formik.getFieldProps("description")}
      />
      </label>



   
    
     
      <button type="submit">Submit</button>
        
    </form> 
    <div>      
<div>{formik.errors.name}</div>

<div>{formik.errors.description}</div>
</div>
    </div>
  );
};

export default Form