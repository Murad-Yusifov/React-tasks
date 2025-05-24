import React, { useEffect, useState } from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'

const Header = () => {

    // Burada basket localdan deyerini qeyd edirik

    const [basketCount, setBasketCount]=useState(0)
    const [wishListCount, setWishListCount] =useState(0)

    useEffect(()=>{
        const updateCount =()=>{
            // basketi localdan getiriki json pormatina ceviririk, eger yoxdusa bosh array qaytarir
            const basket = JSON.parse(localStorage.getItem('basket')) || []
            const wish = JSON.parse(localStorage.getItem('wished')) || []

            // deyerleri state elave edirik

            setBasketCount(basket.length)
            setWishListCount(wish.length)
        }

        // fuksiya terefi olur ve ishe dushmesi ushun yazmaliyiq
        updateCount()

        // elave edildikde  widow dinleyir ve elave edilen komponentleri qaytarir

        window.addEventListener('storage', updateCount)

        //  burada ise silinme olanda window komponentleri silinmeni bashqa tapda  nezere alir.
        return () => window.removeEventListener('storage', updateCount)

    },[])
    
  return (
   <>
    <header className='w-full h-[100px] flex justify-center items-center sticky top-0 bg-white'>
        <nav className='w-[90%] flex justify-around'>
            <div className="cursor-pointer">
                <img src="https://preview.colorlib.com/theme/eiser/img/logo.png" alt="" />
            </div>
            <ul className='w-[35%] flex justify-around'>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Home</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Shop</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Blog</li>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Wish </li><sub > <div className='h-[20px] w-[20px] text-md text-white rounded-[50%] bg-red-500 flex justify-center items-center'>{wishListCount}</div> </sub>
                <li className='text-2xl cursor-pointer hover:text-green-300 transition'>Basket </li><sub>{basketCount}</sub>
            </ul>
            <ul className='w-[14%] flex justify-around '>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiSearch /></li>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiShoppingCart /></li>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiUser /></li>
                <li className='text-2xl font-bold cursor-pointer hover:text-green-300 transition'><CiHeart /></li>
            </ul>
             </nav>
    </header>
   </>
  )
}

export default Header