import React, { useEffect } from 'react'
import './Section3.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../redux/reducers/productSlice'
import { postBasket } from '../../../redux/reducers/basketSlice'

const Section3 = () => {

  const dispatch = useDispatch()

  const data = useSelector(state=>state.product.product)
  const loading = useSelector(state=>state.product.loading)
  const error = useSelector(state=>state.product.error)

  console.log(data);
  

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])

  if(loading) return <span>Loading . . .</span>
  if(error) return <span>Error</span>
  return (
    <>
    <div className='section3'>
      <div className="head">
        <h1>new arrival</h1>
        <ul>
          <li>All</li>
          <li>Men</li>
          <li>Women</li>
          <li>Shoes</li>
        </ul>
        </div>   

        <div className="products">

          {data && data.map(item=>(
            <div className="carts" key={item._id}>
              <img src={item.image} alt="" />
              <button className='btn' onClick={()=>dispatch(postBasket(item))}>Add to Basket</button>
            </div>
          ))}
          
          
          
          </div>         



    </div>
    </>
  )
}

export default Section3