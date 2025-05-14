import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/productSlice'

const Basket = () => {

  const dispatch = useDispatch()

  const data = useSelector(state=>state.basket.basket)
  const loading = useSelector(state=>state.basket.basket)
  const error = useSelector(state=>state.basket.basket)

  useEffect(()=>{
    dispatch(getProductThunk())
  }, [dispatch])

  if(loading) return <span>Loading</span>
  if(error) return <span>error</span>
  return (
    <div>
      {data && data.map(item=>(
        <div className="cards">
          <img src={item.image} alt="" />
          <span>${item.price}</span>
          <button className='btn'>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Basket