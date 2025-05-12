import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'

const Router = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Basket/>}/>
        </Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default Router