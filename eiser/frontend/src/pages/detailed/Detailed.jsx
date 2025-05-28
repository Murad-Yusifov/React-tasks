import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router"; // Düzgün kitabxana istifadə edildi
import { getProduct } from "../../redux/reducers/productSlice";
import Swal from "sweetalert2";

const Detailed = () => {

  const { id } = useParams(); // Məhsul ID-sini alırıq
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (!product?.length) {
      dispatch(getProduct());
    }
  }, [dispatch, product]);

  const addWishList = (item) => {
    try {
      const wish = JSON.parse(localStorage.getItem("wished")) || [];
      const isINwishlist = wish.some((x) => x.id === item.id);
      if (isINwishlist) {
        console.log("Bu mehsul artiq arzu siyahisindedir");
        Swal.fire({
          title: "Already added to the wish list!",
          icon: "success",
          draggable: true,
        });
      } else {
        wish.push(item);
        localStorage.setItem("wished", JSON.stringify(wish));
        console.log("Yeni mehsul elave edildi", wish);
        Swal.fire({
          title: "Added to the wish list!",
          icon: "success",
          draggable: true,
        });
      }
    } catch (error) {
      console.log("Wish list yenileyen zaman xeta bash verdi", error);
    }

    window.dispatchEvent(new Event("storage"));
  };

  const addTBasket = (item) => {
    try {
      const basket = JSON.parse(localStorage.getItem("basket")) || [];
      const existingBasket = basket.find((x) => x.id === item.id);

      if (existingBasket) {
        existingBasket.count = (existingBasket.count || 1) + 1;
      } else {
        basket.push({ ...item, count: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(basket));
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.log("Sebeti yenileme zamani xeta bash verdi", error);
    }
  };

  const selectedProduct = product?.find((item) => item.id === Number(id));

  if (loading) {
    return <span>Loading...</span>; // Yüklənmə vəziyyətini göstərir
  }

  if (error) {
    return <span>Error: {error}</span>; // Səhv mesajını göstərir
  }

  if (!selectedProduct) {
    return <span>Product not found.</span>; // Məhsul tapılmadıqda göstərilir
  }

  return (
    <div className="w-full">
      <div className="flex">
        <Link
          to="/#products"
          className="w-1/4 h-2/4 overflow-hidden flex justify-center"
        >
          <div className="w-full h-2/4 overflow-hidden flex justify-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="h-full"
            />
          </div>
        </Link>
        <div>
          <Link to="/#products" className="flex justify-around items-center">
            <div className="w-full flex flex-col items-start pl-12 pb-4">
              <p className="w-3/4 text-md text-gray-600">
                {selectedProduct.description}
              </p>
              <p className="text-md text-gray-600">{selectedProduct.title}</p>
              <p className="text-md text-gray-800 font-bold">
                ${selectedProduct.price}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full h-[20%] flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => addTBasket(selectedProduct)}
          className="w-[40%] text-white h-[40%] text-md bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md"
        >
          Add to Basket
        </button>
        <button
          onClick={() => addWishList(selectedProduct)}
          className="w-[40%] h-[40%] text-md bg-blue-500 text-white cursor-pointer hover:opacity-80 transition rounded-md"
        >
          Add to Wish
        </button>
      </div>
    </div>
  );
};

export default Detailed;
