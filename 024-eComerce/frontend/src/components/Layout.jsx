import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router'
import Top from './top/Top'

const Layout = () => {
  return (
    <div>
        <Top/>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout