import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/DataContext'
import { setDraweView } from '../../utils/helpers'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { TiShoppingCart } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import './DrawerCart.scss'

function DrawerCart () {
  const { adjustment, setAdjustment } = useContext(GlobalContext)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleChange = () => {
    setAdjustment(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleChange)
  }, [])

  return (
    <>
      <div className='cart' onClick={toggleDrawer}>
        <TiShoppingCart />
        <div className='cart__pop'>
          <span>2</span>
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
              <span>(0 items)</span>
            </li>
            <li className='cart__container--heading-btn'>
              <button onClick={toggleDrawer}>Close</button>
              <button>Clear Cart</button>
            </li>
          </ul>
          <section className='baskets'>
            <p className='baskets__text'>Your cart is currently empty</p>
          </section>
          <div className='cart__container--footer'>
            <div className='cart__container--footer-div'>
              <p>Subtotal Amount:</p>
              <p>$ 125.00</p>
            </div>
            <button onClick={() => { navigate('/') }}>BUY PRODUCTS</button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default DrawerCart
