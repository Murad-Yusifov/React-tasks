import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasket } from '../../../../redux/reducers/basketSlice'

const Section = () => {
    
  const dispatch = useDispatch()

  const data = useSelector(state=>state.basket.basket)
  const loading = useSelector(state=>state.basket.loading)
  const error = useSelector(state=>state.basket.error)
  

  useEffect(()=>{
    dispatch(getBasket())
  },[dispatch])

  if(loading) return <span>Loading . . .</span>
  if(error) return <span>Error</span>


  return (
    <div>
        {data && data.map(item=>(
            <div className="cart">
                <img src={item.image} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Section