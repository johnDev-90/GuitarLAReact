import React from 'react'
import { useState, useEffect } from 'react'

const Modal = ({priceIte, nameItem,setConfirmation, setModal, cartArray, deleteItem, nameProducts}) => {

  
  return (
    <div className='modal'>
       <div className='madaltext'>
       <p>
        Do you want to delete this item?
        </p>
        <p className='productName'>{nameProducts}</p>
        <div className='btn-modal'>
       <button
       onClick={(e) => setConfirmation(true)}
       className='btnYes'>YES</button>
       <button
       onClick={(e)=> setModal(false)}
       className='btnNo'>NO</button>
       </div>
       </div>

       
      
    </div>
  )
}

export default Modal
