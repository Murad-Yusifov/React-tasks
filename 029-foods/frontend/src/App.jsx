import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './router/route'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <div>
     <Provider store={store}>
       <RouterProvider router={router}/>
     </Provider>
    </div>
  )
}

export default App