import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { formatearDinero, getitems } from '../src/Calls';
import guitarraImg from '../public/img/guitarra_01.jpg'
import Error from '../components/Error';




const  SingleView =  ({guitarInfo, setCartArray, cartArray,setQuantity, quantity }) => {
    const [error, setError] = useState(false)
    const [errorMesage, setErrorMesage] = useState('')
    const [clases, setClasses] = useState('')


  

    
    function handleSubmit(e){
        e.preventDefault();
        
        setQuantity(0)

            if (quantity < 1 || isNaN(quantity)) {
                console.log('No has seleccionado nada')
                setError(true)
                setErrorMesage('No items added to cart yet')
                setClasses('errorM')

                setTimeout(() => {
                    setError(false)
                 }, 3000);
                return
            
               }
               setError(true)
               setClasses('success')
               setErrorMesage('Item added successfully')

               setTimeout(() => {
                setError(false)
             }, 3000);
               
        guitarInfo.quantity = Number(quantity);

        const GuitarExist =  cartArray.some(items => items.id === guitarInfo.id)
        
        if (GuitarExist) {
            const guitars = cartArray.map(guitar => {
                if (guitar.id === guitarInfo.id) {
                    const cantidad = guitar.quantity+=1;
                    guitar.quantity = Number(cantidad);
                    return guitar
               
                }
                return guitar
            })
            setCartArray([...guitars])
            
        }else{
            setCartArray([...cartArray,guitarInfo])
        }

        


    }

    const navigate = useNavigate()

  return (
  <div className='view-mainContainer'>
   
      <div className='card-view'>
    <img src={guitarInfo.image} alt='' />
     <div className='guitar-description'>
        <h2 className='guitar-name'>{guitarInfo.name}</h2>

           <section className='guitar-p-view'>
               <p>{guitarInfo.textDescription}</p>
           </section>
           <div className='price-div'>
               <span>{formatearDinero(guitarInfo.price)}</span>
               <form  onSubmit={(e) => handleSubmit(e)} className='amount-input'>
                  <label htmlFor="amount">Amount</label>
                 {error && <Error
                  errorMesage = {errorMesage}
                  error = {error}
                  clases = {clases}
                 />}
                  <select   id='amount' onChange={(e) => setQuantity(Number(e.target.value) || 0)}>
                    <option defaultValue={quantity === 0}>--Select--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>

                  <div className='btns'>
               <button type='submit'   className='btn-addTocart hoverBtns '>Add to cart</button>
                <svg onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>   
              </div>
               </form>
              
               
           </div>
      </div>
  </div>
  </div>
  )
}

export default SingleView
