import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.pro);
  const loading = useSelector((state) => state.product.pro);
  const error = useSelector((state) => state.product.pro);
  return (
    <section>
      {loading ? (
        <p>Loading . . .</p>
      ) : error ? (
        <p className="text-red-500">Error</p>
      ) : data && data.length > 0 ? (
        <ul className="grid grid-cols-3 gap-4">
          {data.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </section>
  );
};

export default Product;
