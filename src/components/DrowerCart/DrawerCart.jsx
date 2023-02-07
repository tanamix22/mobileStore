import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/DataContext'
import {  getDataCountFromStorage, setDraweView, getDataOrderDataFromStorage, getTotalPrice, clearDataLocalStore } from '../../utils/helpers'
import 'react-modern-drawer/dist/index.css'
import { TiShoppingCart } from 'react-icons/ti'
import Drawer from 'react-modern-drawer'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Basket from '../Basket/Basket';
import './DrawerCart.scss'

function DrawerCart () {
  const { cartCount, setCartCount, orderData, setOrderData } = useContext(GlobalContext)
  const [adjustment, setAdjustment ] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = React.useState(false);
  const [totalPrice, setItotalPrice] = React.useState(0);
  let navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    setAdjustment(window.innerWidth);
    let count = getDataCountFromStorage()
    setOrderData(getDataOrderDataFromStorage())
    if (count !== null) {
      setCartCount(count)
    }
  }, [])

  useEffect(()=>{
    setItotalPrice(getTotalPrice(orderData))
  },[orderData])

  const handleClickClear = () => {
    setOrderData([])
    setCartCount(0)
    clearDataLocalStore()
  }

  const handleClickCheckout = () => {
    if(orderData?.length > 0){
      Swal.fire({ title: 'Sucess!', text: `your order was taken`, icon: 'success',confirmButtonText: 'Ok' })
      navigate('/')
      setIsOpen(false)
      handleClickClear()
    }else{
      setIsOpen(false)
      Swal.fire({title: "Error", text: "Your cart is currently empty", icon: "error"})
    }
  }

  return (
    <>
      <div className='cart' onClick={toggleDrawer}>
        <TiShoppingCart />
        <div className='cart__pop'>
          <span> {cartCount}</span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
        size={setDraweView(adjustment)}
      >
        <div className='cart__container'>
            <ul className='cart__container--heading'>
                <li className='cart__container--heading-item'>
                    <span>My Cart</span>
                    <span>({cartCount} items)</span>
                </li>
                <li className='cart__container--heading-btn'>
                    <button onClick={toggleDrawer}>Close</button>
                    <button onClick={ handleClickClear}>Clear Cart</button>
                </li>
            </ul>
            <section className='baskets'>
                {
                    (orderData === null  || orderData.length <= 0 ) 
                    ? 
                    <p className='baskets__text'>Your cart is currently empty</p>
                    :
                    orderData.map((order)=>{
                        return <Basket order={order} setIsOpen={setIsOpen} key={order.productId} />
                    })
                }
            </section>
            <div className='cart__container--footer'>
                <div className='cart__container--footer-div'>
                    <p>Subtotal Amount:</p>
                    <p>$ {totalPrice}</p>
                </div>
                <button onClick={handleClickCheckout} >CHECK OUT</button>
            </div>
          </div>
      </Drawer>
    </>
  )
}

export default DrawerCart
