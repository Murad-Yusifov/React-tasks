import React, { useState } from "react";
import Swal from 'sweetalert2'

const AddedProducts = () => {
const [products, setProducts] = useState(JSON.parse(localStorage.getItem("basket")) || []);
const [touchedItems, setTouchedItems] = useState({});


  const removeFromBasket = (item) => {
  const updatedProducts = products.filter((x) => x.id !== item.id); // Məhsulu tamamilə sil
  setProducts(updatedProducts);
  localStorage.setItem("basket", JSON.stringify(updatedProducts));
  window.dispatchEvent(new Event("storage"));
};

  const increaceProductCount =(item)=>{
    const updateProducts = products.map((x)=>
    x.id === item.id? {...x, count:x.count+1}: x)

    setProducts(updateProducts)

    localStorage.setItem('basket', JSON.stringify(updateProducts))

    window.dispatchEvent(new Event('storage'))
  }

    const decreaseProductsCount =(item)=>{
    const updateProducts = products .map((x) =>
        x.id === item.id && x.count > 1
          ? { ...x, count: x.count - 1 } // Stok miqdarını azalt
          : x
      )

    setProducts(updateProducts)

    localStorage.setItem('basket', JSON.stringify(updateProducts))

    window.dispatchEvent(new Event('storage'))
  }


  const toggleTouched = (id) => {
    setTouchedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Mövcud vəziyyəti tərsinə çevirir
    }));
  };

  return (
    <section className="w-full bg-cover bg-no-repeat bg-left flex justify-center items-center">
      <div className="w-[70%] h-2/4 grid grid-cols-4 gap-6 self-center items-center pr-8">
        {products.map((item) => (
          <div
            className="w-[200px] h-[400px] flex flex-col justify-around shadow text-center items-center gap-4 cursor-pointer"
            key={item.id}
          >
            <div className="w-full h-2/4 overflow-hidden flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-[90%] object-contain"
              />
            </div>
            <p
              className="text-md text-gray-600"
              onClick={() => toggleTouched(item.id)} // Fərdi vəziyyət dəyişdirilməsi
            >
              {touchedItems[item.id]
                ? item.title // Tam başlığı göstər
                : item.title.length > 40
                ? item.title.slice(0, 40) + "..." // Uzun başlığı kəs
                : item.title}
            </p>
            <span>{item.count}</span>

           <div className="w-full flex justify-around">
            <span className="w-[30px] h-[30px] text-white rounded-[50%] bg-green-500 transition-1200 hover:bg-green-600 active:bg-green-400 active:opacity-80  " onClick={()=>decreaseProductsCount(item)}>-</span>
             <span className="text-md text-gray-800 font-bold">${item.price*item.count}</span>
             <span className="w-[30px] h-[30px] text-white rounded-[50%] bg-green-500 hover:bg-green-400 transition-1200 " onClick={()=>increaceProductCount(item)}>+</span>
           </div>
            <div className="w-full h-[20%] flex flex-col items-center justify-center gap-4">
              <button
                onClick={() => removeFromBasket(item)}
                className="w-[90%] text-white h-[40%] text-md bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md"
              >
                Remove Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddedProducts;
