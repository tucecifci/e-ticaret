import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../redux/chartSlice";


function CardPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col flex-wrap !mt-4 !overflow-hidden">
      <h1 className="text-3xl font-bold !mt-4">Sepetim</h1>
      {cartItems.length === 0 ? (
        <p className="!mt-2">Sepetiniz Boş</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 !mt-12 !space-x-20">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col justify-between items-center p-4 h-full">
              <img className="w-full h-52 object-contain rounded" src={item.image} alt={item.title} />
              <h2 className="!mt-4 text-center">{item.title} </h2>
              <p className="font-bold !mt-1">{item.price} TL </p>
             

              <div className="flex flex-row !space-x-8 !mt-2">
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <p> {item.quantity} </p>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr className="!mt-6 text-gray-200" />

      <div className="text-right !mt-6">
        <div className="flex flex-row justify-end">
          <p className="!mr-36">TOPLAM </p>
          <p className="font-bold">{totalPrice.toFixed(2)} TL</p>
        </div>

        <button
          className="bg-black !mt-4 w-72  text-white font-semibold text-md !py-2  cursor-pointer"
        >
          SİPARİŞİ TAMAMLA
        </button>
      </div>
    </div>
  );
}

export default CardPage;
