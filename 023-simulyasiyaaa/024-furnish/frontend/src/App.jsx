import React, { useEffect } from 'react'
import Sections from './components/secions/Sections'
import Header from './components/header/Header'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from './redux/reducers/productSlice'

const App = () => {

  const dispatch =useDispatch()


const loading = useSelector(state=>state.product.loading)
const error = useSelector(state=>state.product.error)

useEffect(()=>{
  dispatch(getProductsThunk())
},[dispatch])

if(loading)return <span>Loading . . .</span>
if(error)return <span>Sorrry, an error had been accured</span>
  return (
    <div className='main'>
      <Header/>
    <Sections/>
  </div>
  )
}

export default App