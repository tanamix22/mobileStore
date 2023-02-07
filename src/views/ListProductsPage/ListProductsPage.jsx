import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import Item from '../../components/Item/Item'
import Search from '../../components/Search/Search'
import { StyleGrid, SearchFilter } from '../../utils/helpers';
import { NavLink } from "react-router-dom";
import './ListProductsPage.scss'
import { getData } from '../../utils/services'

function ListProductsPage () {
  const [word, setIWord] = useState('');
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getData().then((res) => {
      setData(res.data);
      setProducts(res.data)
    });
  },[])

  useEffect(()=>{
    let filter = SearchFilter(data, word)
    if(word.length <= 0){
      setProducts(data)
    }
    setProducts(filter);
  },[word])

  
  
  return (
    <Layout>
      <Search word={word} setIWord={setIWord} />
      <div className='grid' style={StyleGrid(products)}>
        {
          (!products.length)
          ? 
            <div className='grid__notFound'>
              <h3>NO SUGGESTIONS</h3>
              <p>Apologies. Your search<strong> {word} </strong> did not match any results.</p>
              <p>Please check the spelling and try again.</p>
              <NavLink to={'/product/1'} className='navigatelink'>
                <img src='data:image/jpeg;base64,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' />
              </NavLink>
            </div>
          :
          
            products.map((product) => (
              <Item key={product.productId} product={product} />
            )) 
        }
        
      </div>
    </Layout>
  )
}

export default ListProductsPage
