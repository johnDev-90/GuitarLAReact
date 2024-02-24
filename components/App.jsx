import React, { Children, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index, { loader as indexloader } from '../pages/Index';
import Layout from '../components/Layout';
import SingleView from '../pages/SingleView';
import { useState } from 'react';
import Cart from './Cart';
import Store, {loader as storeLoader} from '../pages/Store';
import Blogs, {loader as loaderBlogs} from '../pages/Blogs';
import BlogSingleView from '../pages/BlogSingleView';
import About from '../pages/About';
import Pagar from '../pages/Pagar';



const App = () => {

    const [guitarInfo, setGuitarInfo] = useState({});
    const [cartArray, setCartArray] = useState([])
    const [id, setID] = useState('')

    const [quantity, setQuantity] = useState(0)
    const [saveLocal, setSaveLocal] = useState()
    const [post, setPost] = useState({})
    const [confirmation, setConfirmation] = useState(false)
    const [modal, setModal] = useState(false)

    const [nameProducts, setNameproducts] = useState('')


    function actualizarCantidad(guitarra){
        const updatedCArt = cartArray.map(guitar => {
            if (guitar.id === guitarra.id) {
               guitar.quantity = guitarra.quantity
   
            }
            return guitar
          })
        
          setCartArray(updatedCArt)
     
   
    }

    useEffect(() =>{
     if (confirmation) {

      console.log(confirmation)
      deleteItem(id)
      setConfirmation(false)
      
      
      
     }

    },[confirmation, id])

   

  function deleteItem(id){

    console.log(id)
      
      const updatedCart = cartArray.filter(guitar => guitar.id !== id)
      setCartArray(updatedCart);
      setModal(false)
      
     
  
  }


  
const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout
      cartArray = {cartArray}
      modal = {modal}
      />,

      
      

      children: [
        {
          index: true,
          element: <Index
          setGuitarInfo = {setGuitarInfo}
          guitarInfo = {guitarInfo}
        
          />,
          loader: indexloader,
          
          
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/blog',
          element: <Blogs
          setPost = {setPost}
          />,
          loader: loaderBlogs,
        },
        {
            path: '/post',
            element: <BlogSingleView
            post = {post}
            />,
       
          },
        {
          path: '/cart',
          element:<Cart
          setQuantity = {setQuantity}
          cartArray = {cartArray}
          guitarInfo = {guitarInfo}
          quantity = {quantity}
          saveLocal = {saveLocal}
          actualizarCantidad = {actualizarCantidad}
          deleteItem = {deleteItem}
          setConfirmation = {setConfirmation}
          setModal = {setModal}
          modal ={modal}
          confirmation = {confirmation}
          setID = {setID}
          setNameproducts = {setNameproducts}
          nameProducts = {nameProducts}
    
   

   
          />,
 
        },
        {
          path: '/productview',
          element: <SingleView 
          guitarInfo = {guitarInfo}
          setCartArray = {setCartArray}
          cartArray = {cartArray}
          setQuantity = {setQuantity}
          quantity = {quantity}

          />,

        },
        {
          path:'/pagar',
          element: <Pagar />
        }
      ],
    },
    
  ]);

  return (
    <RouterProvider router={router}>
      {
       
 

      }
    </RouterProvider>
  );
};

export default App;
