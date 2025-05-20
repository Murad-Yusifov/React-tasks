import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addToBasketAsync, getBasketThunk, removeFromBasketAsync } from '../../redux/reducers/basketSlice'

const Admin = () => {
  const validationSchema = Yup.object().shape({
    price: Yup.number()
      .min(1, 'Price must be positive')
      .required('Price is required'),
    title: Yup.string()
      .min(2, 'Title is too short')
      .required('Title is required'),
  })

  const dispatch = useDispatch()
  const data = useSelector((state) => state.basket.basket) 
  const loading = useSelector((state) => state.basket.loading)
  const error = useSelector((state) => state.basket.error)

  const [search, setSearch] = useState('')
  const [sorted, setSorted] = useState('default')

  const filterData = data
    ? data
        .filter(item => item.title && item.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
          if (sorted === 'asc') return Number(a.price) - Number(b.price)
          if (sorted === 'dsc') return Number(b.price) - Number(a.price)
          return 0
        })
    : []

  const formik = useFormik({
    initialValues: {
      price: '',
      title: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addToBasketAsync(values))
      formik.resetForm()
    },
  })

  useEffect(() => {
    dispatch(getBasketThunk())
  }, [])

  if (loading) return <span>Loading . . .</span>
  if (error) return <span>Error: {error}</span>

  return (
    <div className="contain">
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setSorted('asc')}>ASC</button>
      <button onClick={() => setSorted('dsc')}>DSC</button>
      <button onClick={() => setSorted('default')}>Default</button>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder={formik.errors.price || 'Enter price'}
            {...formik.getFieldProps('price')}
          />
        </label>

        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder={formik.errors.title || 'Enter title'}
            {...formik.getFieldProps('title')}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="cover">
        {filterData.map((item) => (
          <div className="container" key={item._id}>
            {item.image && <img className="image" src={item.image} alt={item.title} />}
            <span>{item.title}</span>
            <span>{item.price}</span>
            <button onClick={() => dispatch(removeFromBasketAsync(item._id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
