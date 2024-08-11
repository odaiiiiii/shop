import React, { useContext } from 'react'
import './cart.css'
import { CartContext } from './../store/CartContext';
import Title from './../components/layout/Title';
import Swal from 'sweetalert2'



export default function Cart() {

    const cart = useContext(CartContext)

     

    const deleteItem =(id)=>{

        let newItems = cart.cartItems.filter((item)=>item.id !== id);
       cart.setCartItems([...newItems])
       Swal.fire({
        icon: "error",
        title: "Item deleted",
     
      });

        cart.setCount(cart.count - 1);

    }
    

  return (
    <div className='cards'>
      {/* {console.log(cart.cartItems)} */}
      <div className='all-cards'>
      <Title title="Cart page"/>

  
   {cart.count === 0 ?

      <h4 className='text-center text-danger'>The cart is empty</h4>

  
      : 
      <table className="table-div">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Delete</th>
    
        </tr>
      </thead>
      <tbody>
        
          {cart.cartItems.map((item)=>{
            return(
               <tr key={item.id}>
                
               <td >{item.title}</td>
               <td><img src={item.image} alt=''></img></td>
    
               <td>$ {item.price}</td>
               <td>{item.qty}</td>
              <td><button className="btnDel btn-delete" onClick={()=>deleteItem(item.id)}>
                  <span className="mdi mdi-delete mdi-24px"></span>
                  <span className="mdi mdi-delete-empty mdi-24px"></span>
                  <span>Delete</span>
               </button></td>
             </tr>
          
            )
          })}
      
      </tbody>
          </table>
      }


      </div>
    </div>
  )
}
