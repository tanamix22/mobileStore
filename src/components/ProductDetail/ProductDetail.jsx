import {  useState } from 'react'
import './ProductDetail.scss'

const ProductDetail = ( {item} ) => {
    const [activeSection, setActiveSection] = useState(false);
  return (
    <>
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
    </>
  );
};

export default ProductDetail;