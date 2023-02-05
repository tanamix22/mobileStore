import React, {  useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/DataContext'
import {  getDataCountFromStorage } from '../../utils/helpers'
import 'react-modern-drawer/dist/index.css'
import { TiShoppingCart } from 'react-icons/ti'
import './DrawerCart.scss'

function DrawerCart () {
  const {  cartCount, setCartCount } = useContext(GlobalContext)

  useEffect(() => {
    let count = getDataCountFromStorage()
    if (count !== null) {
      setCartCount(count)
    }
  }, [])

  return (
    <>
      <div className='cart' >
        <TiShoppingCart />
        <div className='cart__pop'>
          <span> {cartCount}</span>
        </div>
      </div>
    </>
  )
}

export default DrawerCart
