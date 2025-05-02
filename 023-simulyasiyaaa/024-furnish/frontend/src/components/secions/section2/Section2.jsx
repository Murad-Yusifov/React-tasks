import React, { useEffect } from 'react'
import './Section2.scss'
import { useDispatch, useSelector } from 'react-redux'

const Section2 = () => {

const data = useSelector(state=>state.product.product)


  return (
    <div className='wrapper'>

        {data && data.map(item=>{
            return(
            <div className='cart'>
                <div className="imged">
                <img src={item.image} alt={item.name} />
                </div>
                <span>{item.name}</span>
                <span className='title'>{item.title}</span>
                <button className='btn' onClick={()=>dispatch(deleteProductThunk(item._id))}>Delete</button>
            </div>
            )
        })}
          
     </div>
  )
}

export default Section2