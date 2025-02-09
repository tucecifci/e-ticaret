import { createSlice } from "@reduxjs/toolkit";

// LocalStorage'dan sepeti yükle
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  cartItems: loadCartFromLocalStorage(), // LocalStorage'dan yüklenen sepet
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Eğer ürün varsa miktarı artır
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Ürün ekle
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems)); // Güncellenmiş sepeti kaydet
    },
    incrementQuantity: (state, action) =>{
        const product = state.cartItems.find((item) => item.id === action.payload);
        if(product){
            product.quantity+=1;
            localStorage.setItem("cart", JSON.stringify(state.cartItems)) //güncellenmiş sepeti kaydet
        }
    },
    decrementQuantity:(state, action)=>{
        const product = state.cartItems.find((item) => item.id === action.payload);
        if(product){
            if(product.quantity >1){
                product.quantity-=1; //eğer miktar 1'den büyükse 1 azalt
            } else{
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        }
    }
  },
});

export const { addToCart, decrementQuantity, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
