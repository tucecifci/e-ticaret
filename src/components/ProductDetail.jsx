import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct, getAllProducts } from "../redux/ProductSlice";
import { CiHeart } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { addToCart } from "../redux/chartSlice";

import {toast} from 'react-toastify';


function ProductDetail() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.products);
  const dispatch = useDispatch();



  useEffect(() => {
    // Ürünleri yükle
    if (!products || products.length === 0) {
      dispatch(getAllProducts()); // Redux store boşsa ürünleri API'den çek
    } else {
      getProductById(); // Ürünler varsa sadece ilgili ürünü bul
    }
  }, [products, id]);

  const getProductById = () => {
    const product = products.find((product) => product.id == id);
    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };

  if (!selectedProduct) {
    return <div>Ürün yükleniyor...</div>;
  }

  const { price, image, title, description } = selectedProduct;

  const handleAddToChart= () =>{
    dispatch(addToCart(selectedProduct));
    toast.success(`${selectedProduct.title} sepete eklendi`)
  }


  return (
    <div className="flex flex-col md:flex-row md:items-start justify-center gap-4 min-h-screen !mt-20 px-4 !overflow-hidden">
      {/* Sol Alan (Görsel) */}
      <div className="md:w-1/2 flex items-center">
        <img src={image} alt={title} className="w-full max-w-md rounded-lg" />
      </div>

      {/* Sağ Alan (Detaylar) */}
      <div className="md:w-1/2 flex flex-col bg-white p-6 space-y-6">
        {/* Başlık ve Fiyat */}
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <h1 className="font-bold text-xl !mt-6 !mb-1">{price} TL</h1>
          <p className="text-red-600 font-semibold text-sm !mb-8">
            YENİ SEZON ÜRÜNLERDE KARGO ÜCRETSİZ
          </p>
        </div>

        {/* Ürün Kodu ve Renk */}
        <div className="text-sm text-gray-700">
          <p>5SAK50116UW999 | Renk: Siyah</p>
        </div>

        {/* Beden Seçenekleri */}
        <div>
          <h4 className="text-sm font-bold !mt-8 !mb-2">Beden</h4>
          <div className="flex gap-4">
            {["34", "36", "38", "40", "42"].map((size) => (
              <button key={size}>{size}</button>
            ))}
          </div>
        </div>

        {/* Sepete Ekle ve Mağazada Ara Butonları */}
        <hr className="!mt-4 !mb-4 text-gray-200" />

        <div className="flex flex-row gap-1 !py-2">
          <button onClick={handleAddToChart} className="bg-black text-white font-semibold text-md !py-2 w-4/5 cursor-pointer">
            Sepete Ekle
          </button>
          <button className="bg-black  flex text-2xl text-center justify-center items-center text-white w-1/5  hover:bg-gray-800 transition-all cursor-pointer">
            <CiHeart />
          </button>
        </div>

        <button className="bg-gray-100 !mb-2 text-black text-md font-semibold !py-2 w-full cursor-pointer flex flex-row justify-center items-center gap-2">
          <CiShop className="text-xl" />
          Mağazada Ara
        </button>
        <hr className="!mt-4 !mb-4 text-gray-200" />

        <div>
          <h4 className="text-sm font-bold !mb-3">Ürün Detay</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
