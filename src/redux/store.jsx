import { configureStore, createReducer } from '@reduxjs/toolkit'
import appReducer from '../redux/appSlice'
import productsReducer from './ProductSlice';
import cartReducer from './chartSlice';

export const store = configureStore({
  reducer: {
   app: appReducer,
   products: productsReducer,
   cart: cartReducer
  },
})