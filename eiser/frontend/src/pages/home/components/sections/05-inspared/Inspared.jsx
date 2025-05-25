import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../../redux/reducers/productSlice";

const Inspired = () => {
  const [touchedItems, setTouchedItems] = useState({}); // Hər məhsul üçün vəziyyət

  const dispatch = useDispatch();

  const addToWish = (item) => {
    try {
      const wish = JSON.parse(localStorage.getItem("wished")) || [];
      const isInWishList = wish.some((x) => x.id === item.id);

      if (isInWishList) {
        console.log("Bu məhsul artıq arzu siyahısındadır!");
      } else {
        wish.push(item);
        localStorage.setItem("wished", JSON.stringify(wish));
        alert("Məhsul arzu siyahısına əlavə olundu!");
        console.log("Yeni məhsul əlavə edildi", wish);

        window.dispatchEvent(new Event("storage"));
      }
    } catch (e) {
      console.error("Arzu siyahısını yeniləmək zamanı xəta baş verdi:", e);
    }
  };

  const addToBasket = (item) => {
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
    } catch (e) {
      console.error("Səbəti yeniləmək zamanı xəta baş verdi:", e);
    }
  };

  const { product: data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error: {error}</span>;

  const modifiedData = [...(data || [])].slice(0, 8);
  if (data && data.length > 8) {
    modifiedData.splice(4, 1, data[12]);
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
        {modifiedData.map((item) => (
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

            <p className="text-md text-gray-800 font-bold">${item.price}</p>
            <div className="w-full h-[20%] flex flex-col items-center justify-center gap-4">
              <button
                onClick={() => addToBasket(item)}
                className="w-[90%] text-white h-[40%] text-md bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md"
              >
                Add to Basket
              </button>
              <button
                onClick={() => addToWish(item)}
                className="w-[90%] h-[40%] text-md bg-blue-500 text-white cursor-pointer hover:opacity-80 transition rounded-md"
              >
                Add to Wish
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspired;
