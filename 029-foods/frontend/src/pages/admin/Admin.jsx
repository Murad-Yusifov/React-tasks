import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBasketThunk, postBasketThunk, putBasketThunk } from "../../redux/reducers/basketSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); // Redaktə modunda olduğumuzu bildirir
  const [editId, setEditId] = useState(null); // Redaktə ediləcək elementin ID-si


  const data = useSelector(state=>state.basket.basket)

  const validationSchema = Yup.object({
    image: Yup.string()
      .min(2, "please fill the place at least more than 2 letters")
      .required("Required"),
    price: Yup.number()
      .min(1, "Price must be at least 1")
      .required("Required"),
  });

  useEffect(()=>{
    dispatch(getBasketThunk())
  },[dispatch])

  const formik = useFormik({
    initialValues: {
      image: "",
      price: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (isEditing) {
        // Update mövcud məlumat
        dispatch(putBasketThunk({ id: editId, updatedData: values }))
          .unwrap()
          .then(() => {
            setIsEditing(false);
            setEditId(null);
            formik.resetForm(); // Formu təmizləyir
          });
      } else {
        // Yeni məlumat əlavə et
        dispatch(postBasketThunk(values));
      }
    },
  });

  const handleEdit = (id, data) => {
    setIsEditing(true);
    setEditId(id);
    formik.setValues(data); // Mövcud məlumatları forma əlavə edir
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="image">Add URL</label>
        <input
          id="image"
          name="image"
          type="text"
          {...formik.getFieldProps("image")}
        />
        {formik.errors.image && formik.touched.image && (
          <div>{formik.errors.image}</div>
        )}

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="text"
          {...formik.getFieldProps("price")}
        />
        {formik.touched.price && formik.errors.price && (
          <div>{formik.errors.price}</div>
        )}

        <button type="submit">{isEditing ? "Update" : "Submit"}</button>
      </form>

      <div>
        <h2>Items List</h2>
        {/* Məlumatların siyahısını əlavə edin */}
        {/* Bu hissədə Redux state-dən məlumatları alıb siyahıya əlavə edin */}
        {/* Nümunə: */}
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.image}</p>
            <p>{item.price}</p>
            <button onClick={() => handleEdit(item.id, item)}>Edit</button>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Admin;
