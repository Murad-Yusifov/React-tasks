import React from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useDispatch } from 'react-redux';
import { postCatagorytThunk } from '../../redux/reducers/catagorySlice';

const Form = () => {
  const dispatch = useDispatch()





    const validationSchema =Yup.object({
        name:Yup.string()
        .min(2, "Name is too short")
        .required("Name is required"),
        description:Yup.string()
        .min(2,"Too short")
        .required("Email must be written"),

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
    <form onSubmit={formik.handleSubmit}>
      
       <label htmlFor="name">Add name</label>
      <input
        id="name"
        name="name"
        type="text"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.description && formik.errors.description}
     
      <label htmlFor="description">Add description</label>
      <input
        id="description"
        name="description"
        type="text"
        {...formik.getFieldProps("description")}
      />
        {formik.touched.description && formik.errors.description}



      <div>

      
        <div>{formik.errors.name}</div>
    
        <div>{formik.errors.description}</div>
      </div>
    
     
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form