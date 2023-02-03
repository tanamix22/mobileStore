import { useContext } from "react";
import product from '../../data/item.json'
import { RatingView } from 'react-simple-star-rating';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Item.scss";

function Item() {

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.productId}`);
    
  }

  const handleBuy = (event) => {
    event.stopPropagation();
    Swal.fire({
      title: 'Sucess!',
      text: 'Product has been added to your cart',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  return (
    <ul className='cardcontainer' onClick={handleClick}>
      {product.listPrice != null
        && 
        <li className='cardcontainer__disscount'>
          <span>OFF</span>
        </li>
      }
        <li className='cardcontainer__image'>
          <img src={product.imageUrl}></img>
        </li>
        <li className='cardcontainer__item'>
          <p>{product.brand} {product.model}</p>
        </li>
        <li className='cardcontainer__icons'>
          <RatingView size={20} ratingValue={product.stars} />
        </li>
        <li className='cardcontainer__price'>
          <p>$ {product.price}</p>
        </li>
        <li className='cardcontainer__btn'>
          <button onClick={handleBuy}>Add To Cart</button>
        </li>
    </ul>
  )
}

export default Item;