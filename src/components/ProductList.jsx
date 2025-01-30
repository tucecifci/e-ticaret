import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/ProductSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
  
      <div className="flex flex-wrap gap-4 justify-between" style={{marginTop: "35px"}}>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
  );
}

export default ProductList;
