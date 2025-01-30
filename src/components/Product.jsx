import React from "react";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  console.log(product);
  return (
      <div className="!p-2 rounded-lg w-[200px] h-[380px] cursor-pointer shadow-lg hover:shadow-gray-400 hover:shadow-lg transform transition-all duration-500 ">
        <img src={image} alt="img" className="w-[180px] h-[240px]" />
        <div className="ml-4">
          <p className="truncate ">{title}</p>
          <h3 className="font-bold">{price} TL </h3>
        </div>
        <div className="flex justify-center">
            <button className="bg-gray-200 !px-8 !py-2 !mt-4 rounded-md cursor-pointer hover:font-bold ">Detay</button>
        </div>
      </div>
  );
}

export default Product;
