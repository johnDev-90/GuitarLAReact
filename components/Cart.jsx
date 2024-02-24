import React from 'react'
import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { formatearDinero } from '../src/Calls';
import { useNavigate } from 'react-router-dom';
import BtnCheckout from './BtnCheckout';
import Modal from './Modal';


const Cart = ({
    cartArray, 
    setQuantity, 
    guitarInfo, 
    quantity, 
    saveLocal, 
    actualizarCantidad, 
    deleteItem,
    setConfirmation,
    modal,
    setModal,
    confirmation,
    setearLaConfirmacion,
    setID,
    setNameproducts,
    nameProducts


}) => {

  const [storageArray, setStorage] = useState([])
  const [total, setTotal] = useState(0)
  const [cantidad, setCantidad] = useState()
  const [nameItem, setNameItem] = useState('')
  const [priceIte, setPriceItm] = useState('')
  const [idproducts, setIDidproducts] = useState()
const navigate = useNavigate()


useEffect(()=>{

    const totalPagar = cartArray.reduce((acumulator, item) => {
        const Subto =  item.quantity * item.price;
        return acumulator + Subto;
    },0)
    
    setTotal(totalPagar)

    const totalItems = cartArray.reduce((acumulator, items) =>{
    return acumulator + items.quantity
    },0)
    setCantidad(totalItems)
},[cartArray])


function getdatos(){
    cartArray.map(items => {
        const {name, price} = items
        setNameItem(name)
        setPriceItm(price)
    })
}



  return (
     <div className={cartArray?.length? 'container':'column-reverse'}>
        <div className={cartArray?.length? 'sumaryOfCharges':'noneDisplay'}>
            <div className={'purchase-details'}>
               <h2>Order Summary</h2>

               <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>QTY</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {cartArray.map(items => {
                 const {name, price, quantity} = items
                  return(

                 <tr className='tr-description'>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{formatearDinero(price)}</td>
                 </tr>

                  )
               })}

                <tr className='tr-subtotal'>
                    <td>Shipping fee:</td>
                    <td>{''}</td>
                    <td>$0.00</td>
                 </tr>
                 <tr className='boldFont'>
                    <td>order total:</td>
                    <td>{''}</td>
                    <td>{formatearDinero(total)}</td>
                 </tr>
                   
                </tbody>
               
               </table>


               <BtnCheckout />
            </div>
            
        </div>
        
      {/* <BtnCheckout /> */}

    <section className='cart-container'>


        {modal && <Modal
        nameItem ={nameItem}
        priceIte = {priceIte}
        setConfirmation = {setConfirmation}
        setModal = {setModal}
        setearLaConfirmacion = {setearLaConfirmacion}
        cartArray = {cartArray}
        deleteItem = {deleteItem}
        setID = {setID}
        nameProducts = {nameProducts}
       
        />}

        <h1 className='title-cart'>Shopping Cart</h1>

            {cartArray?.length? (
                cartArray.map(cartItems => {

                    
              
     
                    return(
    
                         <CartItem 
                     key={cartItems.id}
                     cartItems = {cartItems}
                        setQuantity = {setQuantity}
                        quantity = {quantity}
                        saveLocal = {saveLocal}
                        actualizarCantidad = {actualizarCantidad}
                        deleteItem = {deleteItem}
                        confirmation = {confirmation}
                        setearLaConfirmacion = {setearLaConfirmacion}
                        setConfirmation = {setConfirmation}
                        setModal = {setModal}
                        setID = {setID}
                        setNameproducts = {setNameproducts}
                        
                
                    />
            )
            
         })

            ): (

                <div>
                    <p className='errorMesage'>There are no items in your cart yet.
             
                    </p>
                     
                </div>

            )}
            <div className={cartArray?.length? 'sumaryOfCharges2':'noneDisplay'}>
            <div className={'purchase-details'}>
                <h2>purchase summary</h2>
          
            <p>Number of items: <span>{cantidad}</span></p>
            <p>Total to pay: <span>{formatearDinero(total)}</span></p>
            <BtnCheckout />
            </div>
        </div>
    </section>

</div>
  )
}

export default Cart
