import React, { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";

const Header = () => {
    const [basketCount, setBasketCount] = useState(0);
    const [wishListCount, setWishListCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const basket = JSON.parse(localStorage.getItem("basket")) || [];
            const wish = JSON.parse(localStorage.getItem("wished")) || [];

            const totalBasketCount = basket.reduce((acc, item) => acc + (item.count || 1), 0);
            setBasketCount(totalBasketCount);
            setWishListCount(wish.length);
        };

        // Global function for updating counts
        window.updateCounts = updateCount;

        updateCount();
        window.addEventListener("storage", updateCount);

        return () => {
            window.removeEventListener("storage", updateCount);
            delete window.updateCounts;
        };
    }, []);

    return (
        <header className="w-full h-[100px] flex justify-center items-center sticky top-0 bg-white">
            <nav className="w-[90%] flex justify-around">
                <div className="cursor-pointer">
                    <img
                        src="https://preview.colorlib.com/theme/eiser/img/logo.png"
                        alt="Logo"
                    />
                </div>
                <ul className="w-[35%] flex justify-around items-center">
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition"><a href="/">Home</a></li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition"><a href="#products">Products</a></li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition"><a href="/detaile">Detailes</a></li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition relative">
                       <FaHeart/>

                        <span className="w-[20px] h-[20px] absolute top-[-16px] right-[-10px] text-sm rounded-full bg-red-500 flex justify-center items-center text-white">
                            {wishListCount}
                    </span>
                    </li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition relative">
                      <a href="/basket"><FaCartArrowDown/></a>

                        <span className="w-[20px] h-[20px] absolute top-[-15px] right-[-15px] text-sm rounded-full bg-red-500 flex justify-center items-center text-white">
                            {basketCount}
                    </span>
                    </li>
                </ul>
                <ul className="w-[14%] flex justify-around">
                    <li className="text-2xl font-bold cursor-pointer hover:text-green-300 transition">
                        <CiSearch />
                    </li>
                    <li className="text-2xl font-bold cursor-pointer hover:text-green-300 transition">
                        <CiShoppingCart />
                    </li>
                    <li className="text-2xl font-bold cursor-pointer hover:text-green-300 transition">
                        <CiUser />
                    </li>
                    <li className="text-2xl font-bold cursor-pointer hover:text-green-300 transition">
                        <CiHeart />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
