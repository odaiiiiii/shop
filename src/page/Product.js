import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import './Product.css';
import { CartContext } from './../store/CartContext';
import Title from './../components/layout/Title';
import Swal from 'sweetalert2'


export default function Product() {
  const params = useParams();

  const navigate = useNavigate()

  const [product, setProduct] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/" + params.ProductId)
      .then((data) => {
        setProduct(data.data);
        // console.log(data.data)
      });
  }, [params.ProductId]);

  const priceFormat = (price) => {
    return price.toFixed(2);
  };

  const cart = useContext(CartContext);

  const addToCart = (product) => {
  
    let checkItemExist = cart.cartItems.find((item)=>item.id === product.id);

    if(checkItemExist){

      let newItems = cart.cartItems.map((item)=>{
        if(item.id === product.id){
          item.qty = item.qty + 1
        }
        return item
      })
      cart.setCartItems([...newItems]);

    }

    else{
      const oldItems = cart.cartItems;
      cart.setCartItems([...oldItems, { ...product, qty: 1 }]);
      cart.setCount(cart.count +1)
     

    }
    Swal.fire({
      title: "Added to cart successfully",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go to cart page"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart")
      }
    });
    
 
  };



  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= product.rating.rate) {
        stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>);
      }
    }
    return stars;
  };

  return (
    <>

<div className="  cards " >

<div className='all-cards'>
        <Title title="Product page"/>
  


              {product ?
            
            <div id="container-Product" className='container-Product' >	
                      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

          <div className="product-details">
            
          <h5>{product.title}</h5>
        
              <p className="information">{product.description}</p>
              <span className="hint-star star">
                {renderStars ()}
          </span>
            
            
            
        <div className="control">
          
          <button className="btn-getNow">
          <span className="price"> $ {priceFormat(product.price)}</span>
          <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
          <span className="buy" onClick={()=>addToCart(product)}>Add to cart</span>
        </button>
          
        </div>
              
        </div>
          
        <div className="product-image">
          
          <img src={product.image} alt="" />
          

    
        </div>

        </div>
            
            : <h2 className='text-center'>Loading....</h2>
          }




</div>
      </div>



      {/* {product ?
        <div classNameName="main">
          <ul classNameName="cards">
            <li classNameName="cards_item" id="item_reuben">
              <div classNameName="card">
                <div classNameName="card_price">$ {priceFormat(product.price)}</div>
                <div classNameName="card_image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div classNameName="card_content">
                  <h2 classNameName="card_title">{product.title}</h2>
                  <div classNameName="card_text">
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)} classNameName="btn btn-outline-success btn-add-to-cart">Add to cart</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        : "Not found"} */}
    </>
  );
}
