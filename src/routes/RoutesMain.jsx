import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProductsPage from '../views/ListProductsPage/ListProductsPage'



function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListProductsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain