import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import { Provider } from 'react-redux'
import Admin from '../pages/Admin'
import Wish from '../pages/wish/Wish'
import { store } from '../redux/store'

const Router = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
       <Route path="/" element={<Layout/>}>
       <Route path='/' element={<Home/>}/>
       </Route>
       <Route path='/admin' element={<Admin/>}/>
       <Route path='/wish' element={<Wish/>}/>
       <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default Router