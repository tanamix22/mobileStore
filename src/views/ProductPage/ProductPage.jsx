import { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../contexts/DataContext';
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { getProductById, postProductCart } from '../../utils/services'
import {localStoreCart, localStoreOrderData } from '../../utils/helpers'
import Swal from 'sweetalert2'
import './ProductPage.scss'
import ProductImage from '../../components/ProductImage/ProductImage'
import ProductAction from '../../components/ProductAction/ProductAction';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

function ProductPage () {
  const { id } = useParams()
  const [ item, setItem ] = useState({})
  const navigate = useNavigate()
  const [dataOption, setDataOption] = useState({});
  const { orderData } = useContext(GlobalContext)

  useEffect(() => {
    getProductById(id).then((res) => {
      setItem(res.product)
      setDataOption({
        idProduct: res.product.productId,
        StorageId:res.product.storage[0].id,
        colorId:""
      })
    })
  }, [])


  const handleBuy = () => {
    if(dataOption.colorId === ""){ Swal.fire({title: "Error", text: "select a color please", icon: "error" })
    }else{
      const findRepeatElement = orderData?.find((element)=>element.productId === item?.productId)
      if(findRepeatElement === undefined){
        postProductCart(dataOption).then((res)=>{
          localStoreCart(res)
          localStoreOrderData(item)
          Swal.fire({ title: 'Sucess!', text: `Product con id:' ${dataOption.idProduct} colorId: ${dataOption.colorId}  StorageId: ${dataOption.StorageId} has been added to your cart'`, icon: 'success',confirmButtonText: 'Ok' })
          navigate('/')
          }).catch((error) => {
            console.error("error: ",error);
          })
        }else{
          Swal.fire({title: "Info", text: "the product has already been added to your shopping cart, add a new product to your list", icon: "info"})
          navigate(`/`)
        } 
      }  
  }

  return (
    <Layout>
      {
        (Object.keys(item).length === 0)  || (Object.keys(dataOption).length === 0) 
        ?<p>loading</p>
        :
      <div className='pdpsection'>
        <section className='pdpsection__backpage'>
          <NavLink to='/'>
            <HiArrowNarrowLeft />
            <span>Back to shop</span>
          </NavLink>
        </section>
        <div className='pdpsection__fullproduct'>
          <ProductImage item={item} />
          <section className='section__details'>
            <div className='container'>
              <ProductDetail item={item} />
              <ProductAction item= {item} dataOption={dataOption} setDataOption={setDataOption}/>
              <p className='section__details--price'> $ {item?.price} </p>
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
    }
    </Layout>
  )
}

export default ProductPage
