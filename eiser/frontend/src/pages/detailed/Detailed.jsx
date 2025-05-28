import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import { getProduct } from '../../redux/reducers/productSlice';

const Detailed = () => {
  const { id } = useParams(); // Məhsul ID-sini alırıq
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    // Redux-da artıq məhsullar varsa, bir daha çağırış etməyə ehtiyac yoxdur
    if (!product.length) {
      dispatch(getProduct());
    }
  }, [dispatch, product]);

  const selectedProduct = product?.find((item) => item.id === parseInt(id));

  const handleNavigate = () => {
  window.location.href = "/#products";
};


  if (loading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error}</span>;
  }

  if (!selectedProduct) {
    return <span>Product not found.</span>;
  }

  return (
    <div className='w-full h-[400px]   '>
      <Link to={'/#products'} className='flex justify-around items-center'>
      <div className="w-1/4 h-2/4 overflow-hidden flex justify-center">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="h-full"
        />
      </div>
      <div>
        <div className="w-full flex flex-col items-start pl-12 pb-4">
          <p className="w-3/4 text-md text-gray-600">{selectedProduct.description}</p>
        <p className="text-md text-gray-600">{selectedProduct.title}</p>
      <p className="text-md text-gray-800 font-bold">${selectedProduct.price}</p>
        </div>
      <div className="w-full h-[20%] flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => console.log('Add to Basket:', selectedProduct)}
          className="w-[90%] text-white h-[40%] text-md bg-green-500 cursor-pointer hover:opacity-80 transition rounded-md"
        >
          Add to Basket
        </button>
        <button
          onClick={() => console.log('Add to Wish:', selectedProduct)}
          className="w-[90%] h-[40%] text-md bg-blue-500 text-white cursor-pointer hover:opacity-80 transition rounded-md"
        >
          Add to Wish
        </button>
      </div>
      </div></Link>
    </div>
  );
};

export default Detailed;
