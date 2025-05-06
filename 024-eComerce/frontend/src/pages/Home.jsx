import React, { useEffect } from 'react'
import Sections from '../components/sections/Sections'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../redux/reducers/productSlice'

const Home = () => {
  const dispatch =useDispatch()


  const error = useSelector(state=>state.products.error)

  useEffect(()=>{
       dispatch(getProductThunk())
   },[])

  if(error) return <span>Tapilmadi</span>



  return (
    <>
    <Sections/>        
    </>
  )
}

export default Home