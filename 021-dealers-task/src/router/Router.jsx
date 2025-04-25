import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Admin from '../pages/Admin'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router