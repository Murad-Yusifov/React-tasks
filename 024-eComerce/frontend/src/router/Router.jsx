import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const Router = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
       <Route to="/" element={<Layout/>}>
       <Route path='/' element={<Home/>}/>
       </Route>
       <Route path='*' element={<NotFound/>}/>
    </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default Router