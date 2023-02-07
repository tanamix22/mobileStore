import React from 'react';
import './ProductAction.scss'

const ProductAction = ( {item, dataOption, setDataOption} ) => {

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
    <>  
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
    </>
  );
};

export default ProductAction;