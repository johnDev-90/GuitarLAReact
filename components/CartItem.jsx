import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { formatearDinero } from '../src/Calls';
import guitarraImg from '../public/img/guitarra_01.jpg'



const CartItem = ({setQuantity, cartItems, quantity, actualizarCantidad, deleteItem, confirmation, setConfirmation, setModal, setID, setNameproducts}) => {


    const [subTotal, setSubtotal] = useState(0);

    useEffect(() => {

        calculateSubtotal();

    },[cartItems.quantity])

    function calculateSubtotal(e){
        setSubtotal(cartItems.price * cartItems.quantity)
    }

    const handleChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        actualizarCantidad({ ...cartItems, quantity: newQuantity });
    };

    
       console.log(confirmation)
  

  return (
 
   
            <div className='card-cart'>
                    
            
            <div>
            <img src={cartItems.image} alt={cartItems.imageAlt} />
            </div>
           <div className='products-cart'>
           <p  className='cart-name'>{cartItems.name}</p>
            <span>Quantity</span>
            <select
            value={cartItems.quantity}
            className='secondCart'
            onChange={handleChange}>
            
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
           </select>
            <p><span className='price'>{formatearDinero(cartItems.price)}</span></p>
            <p>Subtotal: <span className='subtotal'>{formatearDinero(subTotal)}</span></p>

            <div className='btnDiv'>
           <Link onClick= { (e) => {setModal(true); setID(cartItems.id); setNameproducts(cartItems.name)}} className='closeBtn'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
           </svg>
           </Link> 

           <Link  to={'/'} className='closeBtn'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
           </svg>
            </Link> 
            </div> 
           </div>   
                
        </div>
        
    
  
  )
}

export default CartItem
