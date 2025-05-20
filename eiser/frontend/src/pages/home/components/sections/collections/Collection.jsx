import React from "react";

const Collection = () => {
  return (
    <section className="w-full h-[600px] bg-[url(https://preview.colorlib.com/theme/eiser/img/offer-bg.png)] bg-cover bg-no-repeat bg-left flex justify-center items-center">
      <div className="w-[70%] h-2/4 flex justify-end items-center pr-8">
        <div className="w-[50%] h-full flex flex-col juctify-center items-center ">
         <div className="w-[70%] flex flex-col text-center items-center gap-4">
             <span className="uppercase text-md font-bold  ">
            all men’s collection
          </span>
          <h1 className="text-[75px] w-full font-bold text-center ">50% off</h1>
          <button className="w-[180px] text-white h-[50px] text-xl bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md">
            View Collections
          </button>
          <p className="text-md text-gray-400 ">Limited Time Offer</p>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
