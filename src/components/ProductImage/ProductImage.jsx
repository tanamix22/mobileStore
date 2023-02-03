import React, { useEffect, useState } from 'react'
import { imageFirst } from '../../utils/helpers'
import './ProductImage.scss'

function ProductImage ({ item }) {
  const [imageOrder, setImageOrder] = useState([0, 1, 2])

  useEffect(() => {
  }, [imageOrder])

  const handleClick = (index) => {
    let arr = [0, 1, 2]
    arr = imageFirst(arr, index)
    setImageOrder(arr)
  }

  return (
    <section className='section__image'>
      <img className='main__image' onClick={() => handleClick(imageOrder[0])} src={item?.imageUrl[imageOrder[0]]} />
      <div className='section__image--pics'>
        <div className='image__secundary'>
          <img onClick={() => handleClick(imageOrder[1])} src={item?.imageUrl[imageOrder[1]]} />
        </div>
        <div className='image__secundary'>
          <img onClick={() => handleClick(imageOrder[2])} src={item?.imageUrl[imageOrder[2]]} />
        </div>
      </div>
    </section>
  )
}

export default ProductImage
