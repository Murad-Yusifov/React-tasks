import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import NotFound from '../components/NotFound'
import Admin from '../pages/Admin'

const Router = () => {
  return (
  <BrowserRouter >
  <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home />} />
    <Route path="/basket" element={<Basket />} />
    <Route path='/admin' element={<Admin/>}/>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
)
}

export default Router