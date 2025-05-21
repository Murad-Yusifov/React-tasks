import React from 'react';

const Shop = () => {
  return (
    <section className="relative w-full h-[1000px] flex items-center justify-center">
         <img
        className="absolute top-[160px] left-[20%] z-10 object-cover"
        src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
        alt="Hero Banner"
      />
      <div className="absolute left-0 top-0 w-[35%] h-full bg-[#384AEB]"></div>
      <div className=" relative z-10 flex justify-end  text-black">
       <div className="w-[50%] flex flex-col  ">
         <h3 className="text-md uppercase mb-2">Shop is fun</h3>
        <h1 className="text-5xl font-bold mb-4">Browse Our Premium Product</h1>
        <p className="mb-6">
          Us which over of signs divide dominion deep fill bring they're meat beho upon own earth 
          without morning over third. Their male dry. They are great appear whose land fly grass.
        </p>
        <button className="w-[150px] h-[50px] rounded-3xl px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer">
          Browse Now
        </button>
       </div>
      </div>
    </section>
  );
};

export default Shop;
