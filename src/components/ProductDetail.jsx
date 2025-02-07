import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct, getAllProducts } from "../redux/ProductSlice"; // getAllProducts action'ını ekledik

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

  return (
    <div className="flex flex-col md:flex-row md:items-start justify-center gap-4 min-h-screen">
  {/* Sol Alan (Mavi Arka Plan) */}
  <div className="md:w-1/2 flex justify-center items-center bg-blue-400">
    <img src={image} alt={title} className="w-full max-w-md rounded-lg" />
  </div>

  {/* Sağ Alan (Turuncu Arka Plan) */}
  <div className="md:w-1/2 flex flex-col bg-amber-400 p-8 space-y-6">
    {/* Başlık ve Fiyat */}
    <h2 className="font-bold text-lg">{title}</h2>
    <h1 className="font-bold text-2xl">{price} TL</h1>

    {/* Beden Seçenekleri */}
    <div>
      <h4 className="text-md font-bold mb-2">Beden</h4>
      <div className="w-full flex gap-2">
        {["34", "36", "38", "40", "42"].map((size) => (
          <button
            key={size}
            className="px-6 py-2 cursor-pointer"
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    {/* Sepete Ekle ve Like Butonları */}
    <div className="flex space-x-4 ">
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all">
        Sepete Ekle
      </button>
      <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all">
        Like
      </button>
    </div>
  </div>
</div>

  );
}

export default ProductDetail;
