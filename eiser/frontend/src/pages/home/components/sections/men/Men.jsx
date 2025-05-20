import React from "react";

const Men = () => {
  return (
    <section className="w-full h-[900px] bg-[url(https://preview.colorlib.com/theme/eiser/img/banner/banner-bg.jpg)] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-[70%] h-2/4 flex justify-start items-center ">
        <div className="w-[30%] h-full text-white flex flex-col juctify-around gap-4">
          <span className="uppercase text-md font-bold ">men Collection</span>
          <h1 className="text-[45px] w-3/4 font-bold "><span className="text-green-500">Show</span> Your Personal <span className="text-green-500">Style</span></h1>
          <p className="text-md ">Fowl saw dry which a above together place.</p>
          <button className="w-[150px] h-[40px] bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md">View Collections</button>
        </div>
      </div>
    </section>
  );
};

export default Men;
