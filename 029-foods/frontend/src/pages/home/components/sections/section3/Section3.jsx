import React, { useEffect } from 'react'
import './Section.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../../../redux/reducers/productSlice'
import { postBasketThunk } from '../../../../../redux/reducers/basketSlice'

const Section3 = () => {
  const dispatch = useDispatch()

  const data = useSelector(state=>state.product.products)
  const loading = useSelector(state=>state.product.loading)
  const error = useSelector(state=>state.product.error)


  useEffect(()=>{
    dispatch(getProductThunk())
  },[dispatch])


// const handleWish = (item) => {
//   const isAlreadyAdded = wishList.some((wishItem) => wishItem.image === item.image);
//   if (isAlreadyAdded) {
//     alert("This item is already in the wish list");
//   } else {
//     dispatch(postWishThunk(item));
//   }
// };



  if(loading) return <span>Loading. . .</span>
  if(error) return <span>Loading. . .</span>
  return (
    <>
    <div className="wrapper3">
      <div className="head">
        <span>Featured Products</span>
        <h1>Our Products</h1>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
      <div className="container">
          {data  && data.map(item=>(
        <div className="carts">
          <img src={item.image} alt="" />
          <p> price: ${item.price}</p>

          <div className="row">
          <button className="btn" onClick={()=>dispatch(postBasketThunk(item))}>
            Add to basket
          </button>
            <button className="btn">
            Add to wish
          </button>
          </div>


        </div>
          ))}

      </div>
      
    </div>
    
    </>
  )
}

export default Section3