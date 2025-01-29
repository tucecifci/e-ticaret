import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/appSlice'
import productsReducer from './ProductSlice';

export const store = configureStore({
  reducer: {
   app: appReducer,
   products: productsReducer
  },
})