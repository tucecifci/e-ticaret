import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearChart, decrementQuantity, incrementQuantity } from "../redux/chartSlice";
import { useNavigate } from "react-router-dom";


function CardPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();


  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleOrder=()=>{
   dispatch(clearChart());
   navigate("/order-complete");
  }

  return (
    <div className="flex flex-col flex-wrap !mt-4 !overflow-hidden">
      <h1 className="text-3xl font-bold !mt-4">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="!mt-2">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 !mt-12 !space-x-20">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col justify-between items-center p-4 h-full">
              <img className="w-full h-52 object-contain rounded" src={item.image} alt={item.title} />
              <h2 className="!mt-4 text-center">{item.title} </h2>
              <p className="font-bold !mt-1">{item.price} $ </p>
             

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
          <p className="!mr-40">TOTAL </p>
          <p className="font-bold">{totalPrice.toFixed(2)} $</p>
        </div>

        <button onClick={handleOrder} 
          className="bg-black !mt-4 w-72  text-white font-semibold text-md !py-2  cursor-pointer"
        >
          PLACE ORDER       
        </button>
      </div>
    </div>
  );
}

export default CardPage;
