import React from 'react'
import { FaLessThan } from 'react-icons/fa'

const View = () => {
  return (
    <div className='w-full h-[700px] flex justify-center bg-[url(https://mobirise.com/extensions/naturalm4/natural%20cosmetic/assets/images/background9.jpg)] bg-cover bg-center sticky'>
        <div className="w-[80%] h-full flex justify-start items-center">
            <div className="w-[35%] flex flex-col items-start justify-between gap-4 relative">
                <h1 className='view text-6xl  font-bold '>The view on refreshing</h1>
                <p className='text-md '>Phosfluorescently maintain impactful process.</p>
                <button className='w-[140px] h-[45px] cursor-pointer border-[2px] border-red-600 hover:bg-red-600 transition'>Read More</button>
                <div className="absolute top-[50%] left-[-30px]"><FaLessThan className='font-normal text-3xl cursor-pointer text-gray-400' />
</div>
            </div>
        </div>
    </div>
  )
}

export default View