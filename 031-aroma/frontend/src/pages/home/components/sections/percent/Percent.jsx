import React from 'react'

const Percent = () => {
  return (
    <section className='w-full h-[500px] bg-[url(https://preview.colorlib.com/theme/aroma/img/home/parallax-bg.png)] bg-cover'>
           <div className="w-full h-full relative z-10 flex justify-start items-center  text-black">
       <div className="w-[50%] flex flex-col justify-center items-center ">
         <h3 className="text-5xl uppercase mb-2">Up To 50% Off</h3>
        <h1 className="text-2xl  mb-4">Winter Sale</h1>
        <p className="mb-6">Him she'd let them sixth saw light</p>
        <button className="w-[150px] h-[50px] rounded-3xl px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
          Shop Now
        </button>
       </div>
      </div>
    </section>
  )
}

export default Percent