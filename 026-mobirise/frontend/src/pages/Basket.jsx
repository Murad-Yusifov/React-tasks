import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../redux/reducers/basketSlice'

const Basket = () => {
  const dispatch = useDispatch()

  // Redux state-dən məlumatları götürürük
  const { basket, loading, error } = useSelector(state => state.basket)

  useEffect(() => {
    dispatch(getBasketThunk())  // Component mount olanda məhsulları serverdən gətir
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Basket Products</h2>
      {basket.length === 0 && <p>Basket is empty.</p>}
      <ul>
        {basket.map(item => (
          <li key={item._id}>
            <img src={item.image} alt={item.title} width="50" />
            <span>{item.title} - {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Basket
