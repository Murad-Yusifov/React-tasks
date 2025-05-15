import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../redux/reducers/basketSlice'

const Basket = () => {


  const dispatch = useDispatch()

  const data = useSelector(state=>state.basket.basket)
  const loading = useSelector(state=>state.basket.loading)
  const error = useSelector(state=>state.basket.error)

  console.log(data);
  

  useEffect(()=>{
    dispatch(getBasketThunk())
  }, [dispatch])

  if(loading) return <span>Loading</span>
  if(error) return <span>error</span>
  return (
    <div>
      {data && data.map(item=>(
        <div className="cards">
          <img src={item.image} alt="" />
          <span>${item.price}</span>
          <button className='btn' onClick={()=>dispatch(deleteBasketThunk(item._id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Basket