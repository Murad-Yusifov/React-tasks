  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getProduct } from "../../../../../redux/reducers/productSlice";

  const Inspared = () => {
      const dispatch = useDispatch();

      const addToWish = (item) => {
          try {
              const wish = JSON.parse(localStorage.getItem('wished')) || [];
              const isInWishList = wish.some((x) => x._id === item._id);

              if (isInWishList) {
                  alert("Bu məhsul artıq arzu siyahısındadır!");
              } else {
                  wish.push(item);
                  localStorage.setItem('wished', JSON.stringify(wish));
                  alert("Məhsul arzu siyahısına əlavə olundu!");

                  console.log('Yeni mehsul elave edildi', wish)
              }
          } catch (e) {
              console.error("Arzu siyahısını yeniləmək zamanı xəta baş verdi:", e);
          }
      };

      const data = useSelector((state) => state.product.product);
      const loading = useSelector((state) => state.product.loading);
      const error = useSelector((state) => state.product.error);

      useEffect(() => {
          dispatch(getProduct());
      }, [dispatch]);

      if (loading) return <span>Loading. . .</span>;
      if (error) return <span>Error</span>;

      return (
          <section className="w-full h-[900px] bg-cover bg-no-repeat bg-left flex justify-center items-center">
              <div className="w-[70%] h-2/4 grid grid-cols-4 self-center flex-wrap items-center pr-8">
                  {data &&
                      data.map((item) => (
                          <div className="w-[70%] h-[400px] flex flex-col text-center items-center gap-4" key={item._id}>
                              <img src={item.image} alt={item.title} />
                              <p className="text-md text-gray-400">{item.title}</p>
                              <p className="text-md text-gray-400">{item.price}</p>
                              <button className="w-[180px] text-white h-[50px] text-xl bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md">
                                  Add to Basket
                              </button>
                              <button onClick={() => addToWish(item)}>Add to wish</button>
                          </div>
                      ))}
              </div>
          </section>
      );
  };

  export default Inspared;
