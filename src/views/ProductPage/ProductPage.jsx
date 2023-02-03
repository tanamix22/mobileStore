import {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {getProduct} from '../../utils/helpers';
import Layout from '../../components/Layout/Layout'
import Products from '../../data/products.json'
import { HiArrowNarrowLeft } from "react-icons/hi";
import Swal from 'sweetalert2';
import './ProductPage.scss';
import ProductImage from '../../components/ProductImage/ProductImage';

function ProductPage() {
    const [item, setItem]= useState()
    const {id} = useParams();

    useEffect(()=>{
        setItem(getProduct(Products, id ))
    }, [])

    const handleBuy = () => {
        Swal.fire({
            title: 'Sucess!',
            text: 'Product has been added to your cart',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

  return (
    <Layout>
        <div className='pdpsection'>
            <section className='pdpsection__backpage'>
                <NavLink to={'/'}>
                    <HiArrowNarrowLeft/> 
                    <span>Back to shop</span>
                </NavLink>
            </section>
            <div className='pdpsection__fullproduct'>
                <ProductImage item={item} />
                <section className='section__details'>
                    <div className='container'>
                        <h3 className='section__details--name'>{item?.brand} {item?.model}</h3>
                        <p className='section__details--description'> {item?.productDetail}</p>
                        <p className='section__details--select'>Type of the product</p>
                    <div>
                    <select className='section__details--selector'>
                        <option>--Select--</option>
                        {
                            item?.storage.map((item)=>(
                                <option> {item} </option>
                            ))
                        }
                    </select>
                    </div>
                    <div className='section__details--sdk'>
                        <p>Choose color</p>
                        {
                            item?.color.map((item)=>(
                                <input type='button'className={item}/>
                            ))
                        }
                    </div>
                    <p className='section__details--price'> $105.67 </p>
                    <input 
                        className='section__details--btn'
                        type='button'
                        value='Add To Cart'
                        onClick={handleBuy}
                    />
                    </div>
                </section>
            </div>
        </div> 
    </Layout>
  )
}

export default ProductPage;