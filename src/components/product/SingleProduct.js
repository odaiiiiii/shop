import React from 'react'
import './SingleProduct.css'
import { Link } from 'react-router-dom'

export default function SingleProduct({product}) {
  // console.log(product)
  return (
    <>


<div className ="container-card page-wrapper ">
  <div className ="page-inner ">
    <div className ="row ">
      <div className ="el-wrapper ">
        <div className ="box-up " >
          <img className ="img" src={product.image} alt=""/>
          <div className ="img-info">
            <div className ="info-inner">
              <span className ="p-name"> {product.title.slice(0,18)}.... </span>
              <span className ="p-company">{product.category}</span>
            </div>
            <div className ="a-size">description Product <br/> <span className ="size">{product.description.slice(0,100)+ " ...."}</span></div>
          </div>
        </div>

        <div className ="box-down">
          <div className ="h-bg">
            <div className ="h-bg-inner"></div>
          </div>

          <Link className ="cart" to={`/products/${product.id}`}>
            <span className ="price">${product.price}</span>
            <span className ="add-to-cart">
              <span className ="txt">Show all details</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
