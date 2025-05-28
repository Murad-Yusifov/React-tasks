import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Products = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('wished')) || []);
    const [touched, setTouched] = useState({});


    const removeFromWishList = (item) => {
        const updatedProducts = products.filter((x) => x.id !== item.id);
        setProducts(updatedProducts);
        localStorage.setItem('wished', JSON.stringify(updatedProducts));
        window.dispatchEvent(new Event('storage'));
    };

    const toggleTouched = (id) => {
        setTouched((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedProducts = JSON.parse(localStorage.getItem('wished')) || [];
            setProducts(updatedProducts);
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <section className='w-full flex flex-wrap items-center justify-center'>
            {products.map((item) => (
                <div key={item.id} className="w-[300px] h-[450px] flex flex-col items-center justify-around hover:border transition-150">
                    <div className="w-2/4">
                        <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.title} className='w-[100%]' />
                        </Link>
                    </div>
                    <p
                        className="text-md text-gray-600"
                        onClick={() => toggleTouched(item.id)}
                    >
                        {touched[item.id]
                            ? item.title
                            : item.title.length > 40
                            ? item.title.slice(0, 40) + "..."
                            : item.title}
                    </p>
                    <button
                        onClick={() => removeFromWishList(item)}
                        className="cursor-pointer"
                    >
                        Remove
                    </button>
                </div>
            ))}
        </section>
    );
};

export default Products;
