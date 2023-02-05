import { RatingView } from 'react-simple-star-rating'
import { useNavigate } from 'react-router-dom'
/* import Swal from 'sweetalert2' */
import './Item.scss'

function Item ({ product }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.productId}`)
  }

  return (
    <ul className='cardcontainer' onClick={handleClick}>
      {product.listPrice != null &&
        <li className='cardcontainer__disscount'>
          <span>OFF</span>
        </li>}
      <li className='cardcontainer__image  cardcontainer__image--main'>
        <img src={product.imageUrl[0]} />
      </li>
      <li className='cardcontainer__image cardcontainer__image--hover'>
        <img src={product.imageUrl[1]} />
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
    </ul>
  )
}

export default Item
