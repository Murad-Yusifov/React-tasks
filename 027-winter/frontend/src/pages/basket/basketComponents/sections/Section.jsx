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
         <div className="image-list">
      {data && data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={index} />
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default Section