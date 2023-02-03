import Layout from '../../components/Layout/Layout'
import Item from '../../components/Item/Item'
import Products from '../../data/products.json'
import './ListProductsPage.scss'

function ListProductsPage () {
  return (
    <Layout>
      <div className='grid'>
        {
          Products.map((product) => (
            <Item key={product.productId} product={product} />
          ))
        }
      </div>
    </Layout>
  )
}

export default ListProductsPage
