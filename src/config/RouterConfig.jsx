import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'

function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details/:id' element={<ProductDetail />} />
    </Routes>
  )
}

export default RouterConfig