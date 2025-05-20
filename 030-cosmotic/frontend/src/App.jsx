import React from 'react'
import Home from './pages/home/Home'
import { RouterProvider } from 'react-router'
import { router } from './router/route'

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App