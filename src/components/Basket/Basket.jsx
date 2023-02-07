import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/DataContext';
import './Basket.scss'

function Basket({order, setIsOpen}) {
    const {orderData, setOrderData, setCartCount} = useContext(GlobalContext);
    let navigate = useNavigate();

    const handleClick = () => {
      setIsOpen(false)
      navigate(`/`);  
    }

    const handleRemove = (order )=> {
     const newOrder = orderData.filter((item)=> item.productId !== order.productId)
      setOrderData(newOrder)
     setCartCount(newOrder.length)
     localStorage.setItem("orderData", JSON.stringify(newOrder) );
     localStorage.setItem("cartCount", Number( newOrder.length));
    }
    
  return (
    <div className='basket'>
        <div className='basket__wrapper'>
            <div className='basket__wrapper--picture'>
                <img className='image' src={order.imageUrl}></img>
            </div>
            <div className='basket__wrapper--details'>
                <h4  onClick={handleClick} className='linked__product'>{order.brand} {order.model}</h4>
            </div>
            <div className='basket__wrapper--price'>
                <h4>$ {order.price}</h4>
            </div>
            <button onClick={()=>{handleRemove(order)} } className='basket__wrapper--close'>X</button>
        </div>
    </div>
  )
}

export default Basket
