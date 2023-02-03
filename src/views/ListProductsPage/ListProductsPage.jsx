import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import Item from '../../components/Item/Item'
import Products from '../../data/products.json'
import './ListProductsPage.scss'
import Search from '../../components/Search/Search'

function ListProductsPage () {
  const [word, setIWord] = useState('');
  const [products, setProducts] = useState(Products);

  useEffect(()=>{
    let filter = Products.filter((element) => element.model.toUpperCase().includes(word?.toUpperCase()));
    console.log("filter", filter, "word", word )
    if(word.length <= 0){
      setProducts(Products)
    }
    setProducts(filter);
  },[word])

  return (
    <Layout>
      <Search word={word} setIWord={setIWord} />
      <div className='grid'>
        {
          products.map((product) => (
            <Item key={product.productId} product={product} />
          ))
        }
      </div>
    </Layout>
  )
}

export default ListProductsPage
