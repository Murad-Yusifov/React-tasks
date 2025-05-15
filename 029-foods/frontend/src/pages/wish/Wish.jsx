import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWishThunk } from '../../redux/reducers/wishSlice'

const Wish = () => {

  const dispatch = useDispatch()

  const data = useSelector(state=>state.wish.wish)

  useEffect(()=>{
    dispatch(getWishThunk())
  }, [dispatch])
  return (
    <div>
      {data && data.map(item=>(
        <div className="div">
          <img src={item.image} alt="" />
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Wish