import './Products.css'
import ProductList from './../components/product/ProductList';
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
export default function Product() {

  return (
    <>
   <ProductList/>

    </>
  )
}
