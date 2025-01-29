import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/ProductSlice";

function ProductList() {
  const dispatch = useDispatch()
  const {products} = useSelector((store) => store.products);
  console.log(products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return <div>ProductList</div>;
}

export default ProductList;


