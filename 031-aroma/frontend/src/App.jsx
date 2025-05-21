import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routes/route'

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App