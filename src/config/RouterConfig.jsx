import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'
import CardPage from '../pages/CardPage'
import OrderCompletedPage from '../pages/OrderCompletedPage'

function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<CardPage />} />
        <Route path='/order-complete' element={<OrderCompletedPage />} />
    </Routes>
  )
}

export default RouterConfig