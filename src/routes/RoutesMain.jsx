import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListProductsPage from '../views/ListProductsPage/ListProductsPage'
import ProductPage from '../views/ProductPage/ProductPage'

function RoutesMain () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain
