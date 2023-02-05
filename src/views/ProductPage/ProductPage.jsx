import { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { getProductById } from '../../utils/servises'
import Swal from 'sweetalert2'
import './ProductPage.scss'
import ProductImage from '../../components/ProductImage/ProductImage'

function ProductPage () {
  const { id } = useParams()
  const [ item, setItem ] = useState({})
  const [activeSection, setActiveSection] = useState(false);
  const navigate = useNavigate()
  const [dataOption, setDataOption] = useState({});

  useEffect(() => {
    getProductById(id).then((res) => {
      setItem(res.product)
      console.log("item", item)
      
      setDataOption({
        idProduct: res.product.productId,
        StorageId:res.product.storage[0].id,
        colorId:""
      })
    })
  }, [])

/*   useEffect(() => {
    
  }, [dataOption]) */

  const handleBuy = () => {
    if(dataOption.colorId === ""){
      Swal.fire({title: "Error", text: "select a color please", icon: "error"})
    }else{
      console.log("data", dataOption)
      Swal.fire({
        title: 'Sucess!',
        text: `Product con id:' ${dataOption.idProduct} colorId: ${dataOption.colorId}  StorageId: ${dataOption.StorageId} has been added to your cart'`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate('/')
    }
   
  }
  const handleColorChange = (colorId) => {
    setDataOption({
      ...dataOption,
      colorId,
    });
  };

  const handleStorageChange = (event) => {
    setDataOption({
      ...dataOption,
      StorageId:event.target.value
    });
  };


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
              <h3 className='section__details--name'>{item?.brand} {item?.model}</h3>
              <p className='section__details--description'> {item?.productDetail}</p>
              <div className='section__details--feacture'>
                <div onClick={() => setActiveSection(!activeSection) } className='section__details--feactureClick'>
                  <strong>
                    <p>Technical Features </p>
                    <p className='section__details--feactureActive'>
                      { activeSection ? "-" : "+"}
                    </p>  
                  </strong>
                </div>
                {
                    activeSection
                  &&
                    <ul>
                      <li><span>CPU: </span> {item?.cpu} </li>
                      <li><span>RAM: </span> {item?.ram} </li>
                      <li><span>OS: </span> {item?.os} </li>
                      <li><span>Batery: </span> {item?.batery} </li>
                      <li><span>Cam: </span> {item?.cam} </li>
                      <li><span>Dimensions: </span> {item?.dimensions} </li>
                      <li><span>Weight: </span> {item?.weight} </li>
                     </ul>
                }
              </div>
              <p className='section__details--select'>Type of the product</p>
              <div>
                <select className='section__details--selector' onChange={handleStorageChange}>
                  {
                    item?.storage.map((item) => (
                       <option  value={item.id} key={item.id}> {item.capacity} </option>
                     ))
                  }
                </select>
              </div>
              <div className='section__details--sdk'>
                <p>Choose color</p>
                {
                  item?.color.map((item) => (
                    <input 
                    onClick={() => handleColorChange(item.id)} 
                    style={dataOption.colorId === item.id ? { border: '3px solid red' } : {}}
                    type='button' key={item.id} 
                    className={`${item.color} color`} />
                  ))
                }
              </div>
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
