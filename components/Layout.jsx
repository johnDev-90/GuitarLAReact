import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import logo from '../assest/logo.svg'
import { useState, useEffect } from 'react'
import IconCart4 from './IconCart4'
import Blogs from '../pages/Blogs'

const Layout = ({cartArray}) => {
    const [cantidad, setCantidad] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);

 
    console.log(toggleMenu)
   useEffect(() =>{


    const totalItems = cartArray.reduce((acumulator, items, modal) => {
        return acumulator + items.quantity;
        

    },0)

    setCantidad(totalItems)

   },[cartArray])


   function hanldleToggle(){
    if (!toggleMenu) {
        setToggleMenu(true);
     
    }else{
        setToggleMenu(false)
    }

    
   }
   
 
           
           


   

  return (
   <div className='header-container'>
    
     <div onClick={(e)=> hanldleToggle()} className='bars-menu'>
     <div className={`${cantidad >0? 'notifcations': 'notifcations-hide'}`}>
     <p>{cantidad}</p>
    </div>
     {toggleMenu === true?(
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      

     ):(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
     </svg>

     )}

     </div>
     <header className='menu-container'>
         <div className='logo'>
            <img src={logo} alt="" />
         </div>

         <nav className={`navbar-menu ${toggleMenu === true ? 'show-menu' : 'hide-menu'} `}>
            <Link
            onClick={(e) => setToggleMenu(false)}
            className='link' to="/">Home</Link>
            <Link
            onClick={(e) => setToggleMenu(false)}
            className='link' to="/about">about us</Link>
            <Link
            onClick={(e) => setToggleMenu(false)}
            className='link' to="/blog">BLOGS</Link>

            <div className='cart-icone'>
            <Link
            onClick={(e) => setToggleMenu(false)}
            to="/cart"><IconCart4
            
            cantidad = {cantidad}
            /></Link>
            </div>
          
           
            
        </nav>
    </header>
    <Outlet />
 
    <footer>
            <div className='footer-menu'>
            <Link to="/">Home</Link>
            <Link to="/about">about us</Link>
            <Link to="/blog">BLOG</Link>
            </div>
        <p>©GuitarLA All rights reserved.</p>
    </footer>
   </div>  
  
  )
}

export default Layout
