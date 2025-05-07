import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router'
import Top from './top/Top'
// import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout