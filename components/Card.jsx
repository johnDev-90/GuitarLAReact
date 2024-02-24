import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import SingleView from "../pages/SingleView"
import { formatearDinero } from "../src/Calls"




const Card = ({guitar, setGuitarInfo}) => {
  
  const guitarobj = {
      name: guitar.attributes.name,
      price:  guitar.attributes.price,
      image: guitar.attributes.image.data.attributes.formats.small.url,
      imageAlt: guitar.attributes.image.data.attributes.formats.medium.name,
      textDescription: guitar.attributes.description[0].children[0].text,
      id: guitar.id,
      url: guitar.attributes.url
 }


  return (
    <div className='card'>
    <img src={guitarobj.image} alt={guitarobj.imageAlt} />
     <div className='guitar-description'>
        <h2 className='guitar-name'>{guitarobj.name}</h2>

           <section className='guitar-p'>
               <p>{guitarobj.textDescription}</p>
           </section>
           <div className='price-div'>
               <span>{formatearDinero(guitarobj.price)}</span>
               <Link to={'/productview'} onClick={(e) => setGuitarInfo(guitarobj)} className='btn-vewProduct hoverBtns'>View Product</Link>
           </div>
      </div>
  </div>
  )
}

export default Card
