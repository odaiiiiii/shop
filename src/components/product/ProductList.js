import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import Title from '../layout/Title';
const axios = require('axios');
export default function ProductList() {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(function (response) {

        setProducts(response.data);
        console.log(response.data)
  })

    },[])



  return (
    <div>
       <div className="  cards " >

    <div className='all-cards'>
      <Title title="Products page" />
    <div className='cards-bg'>

    {
    !products.length ?  <span className="loader"></span>
    :
    products.map((product)=>{
      return  <SingleProduct  product={product}  key={product.id}/>
    })}

   
   
    </div>

  </div>

</div>
    </div>
  )
}
