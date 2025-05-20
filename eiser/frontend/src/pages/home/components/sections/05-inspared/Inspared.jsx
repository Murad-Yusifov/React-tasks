import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../../redux/reducers/productSlice";

const Inspared = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
 

  useEffect(() => {
    dispatch(getProduct());
  }, []);

   if (loading) return <span>Loading. . .</span>;
  if (error) return <span>Error</span>;
  return (
    <section className="w-full h-[900px] bg-cover bg-no-repeat bg-left flex justify-center items-center">
        <div className="w-[70%] h-2/4 grid grid-cols-4  self-center flex-wrap items-center pr-8">
      {data &&
        data.map((item) => (
          
            <div className="w-[70%]  h-[400px] full flex flex-col text-center  items-center gap-4">
              <img src={item.image} alt="" />
              <p className="text-md text-gray-400 ">{item.title}</p>
              <p className="text-md text-gray-400 ">{item.price}</p>
              <button className="w-[180px] text-white h-[50px] text-xl bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md">
                Add to Basket
              </button>
          </div>
        ))}
        </div>
    </section>
  );
};

export default Inspared;
