import React, { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

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
                <ul className="w-[35%] flex justify-around">
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition">Home</li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition">Shop</li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition">Blog</li>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition">
                        Wish
                    </li>
                    <sub>
                        <div className="h-[20px] w-[20px] text-md text-white rounded-[50%] bg-red-500 flex justify-center items-center">
                            {wishListCount}
                        </div>
                    </sub>
                    <li className="text-2xl cursor-pointer hover:text-green-300 transition">
                        Basket
                    </li>
                    <sub>{basketCount}</sub>
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
