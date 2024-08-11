import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Home from './page/Home';
import Cart from './page/Cart';
import { useState } from 'react';
import { CartContext } from './store/CartContext';
import Products from './page/Products'
import Product from './page/Product'
import '@mdi/font/css/materialdesignicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css'
import FeaturedProducts from './page/FeaturedProducts';

function App() {

  const [cartItems,setCartItems] = useState([])
  const [count ,setCount] = useState(0)

  return (
    < >
     <BrowserRouter>

     <CartContext.Provider value={{cartItems,setCartItems,count,setCount}}>
     <NavBar/>
     <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
    <Route path='/products/:ProductId' element={<Product/>} />
    <Route path='/featured' element={<FeaturedProducts/>} />
    <Route path='/cart' element={<Cart/>} />

     </Routes>
     </CartContext.Provider>
     
     
     </BrowserRouter>

      </>
  );
}

export default App;
