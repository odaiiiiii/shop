import React, { useContext,useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';

export default function NavBar() {

      const cart = useContext(CartContext)
      useEffect(() => {
        window.scrollTo({
          top: window.innerHeight * 0.8,
          behavior: 'smooth',
        });
      }, []);
      
  return (
    <div className="container1">
      <nav className="mask">
        <Link to="/">Home</Link>
        <ul className="list">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/featured">Featured Products</Link></li>
          <li><Link to="#">Contact Us</Link></li>
          <li><Link to="/cart">Cart <span className='badge bg-warning'>{cart.count}</span>  </Link></li>
        </ul>
        <button className="menu">Menu</button>
      </nav>
      <div className="content">
        
      </div>
    </div> 
  );
}
