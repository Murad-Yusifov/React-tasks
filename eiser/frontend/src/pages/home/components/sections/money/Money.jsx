import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdSupportAgent } from 'react-icons/md'
import { SiBlockchaindotcom } from 'react-icons/si'
import { TbMoneybag } from 'react-icons/tb'

const Money = () => {
  return (
   
    <section className='w-full h-[300px] flex justify-center items-center'>
        <div className="w-[60%] flex justify-around items-center ">
            <div className="w-[200px] h-[140px] flex flex-col cursor-pointer justify-center pl-4 border-gray-300 border gap-2">
                <TbMoneybag className='text-3xl text-gray-400 ' />
                <span>Money back gurantee</span>
                <span>Shall open divide a one</span>
            </div>

             <div className="w-[200px] h-[140px] flex flex-col cursor-pointer justify-center pl-4 border-gray-300 border gap-2">
                <CiDeliveryTruck className='text-3xl text-gray-400 ' />

                <span>Money back gurantee</span>
                <span>Shall open divide a one</span>
            </div>

             <div className="w-[200px] h-[140px] flex flex-col cursor-pointer justify-center pl-4 border-gray-300 border gap-2">
                <MdSupportAgent className='text-3xl text-gray-400 ' />
                <span>Money back gurantee</span>
                <span>Shall open divide a one</span>
            </div>

             <div className="w-[200px] h-[140px] flex flex-col cursor-pointer justify-center pl-4 border-gray-300 border gap-2">
                <SiBlockchaindotcom className='text-3xl text-gray-400 ' />
                <span>Money back gurantee</span>
                <span>Shall open divide a one</span>
            </div>
        </div>

    </section>
  )
}

export default Money