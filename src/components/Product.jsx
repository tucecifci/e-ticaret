import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate();
 
  return (
      <div className="!p-2 rounded-lg w-[200px] h-[380px] cursor-pointer shadow-lg hover:shadow-gray-400 hover:shadow-lg transform transition-all duration-500 ">
        <img src={image} alt="img" className="w-[180px] h-[240px]" />
        <div className="ml-4">
          <p className="truncate ">{title}</p>
          <h3 className="font-bold">{price} TL </h3>
        </div>
        <div className="flex justify-center">
            <button onClick={() => navigate("./product-details/" + id)} className="bg-gray-200 !px-8 !py-2 !mt-4 rounded-md cursor-pointer hover:font-bold">Detail Page</button>
        </div>
      </div>
  );
}

export default Product;
