import React from 'react'
import './Popular.css'
import data_product from "../Assets/data.js"
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="pupolar-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
            })}
        </div>
    </div>
  )
}

export default Popular