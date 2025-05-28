import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigation = useNavigate()
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center  gap-4 '>
      <h1>The page that you've been looking for is not NotFound</h1>

      <button onClick={()=>navigation('/')} className='w-[250px] h-[35px] border-0 text-red-400 cursor-pointer bg-green-500 rounded-xl'>Go back to home Page</button>

    </div>
  )
}

export default NotFound