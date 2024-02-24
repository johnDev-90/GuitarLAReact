import React from 'react'
import { formatearFecha } from '../src/Calls'
import { Link } from 'react-router-dom'

const BlogSingleView = ({post}) => {


console.log(post)
  


  return (
   <div>

<Link className='btnBack hoverBtns' to={'/blog'} >Back to blogs</Link> 
     <article className='post-singleview'>
      
       
       <img src={post.attributes.image.data.attributes.formats.medium.url} alt="" />

       <div className='blog-description'>
         <p className='blog-Title' >{post.attributes.Title}</p>
         <span className='date'>{formatearFecha(post.attributes.publishedAt)}</span>
         <p className='blog-paragr'>{post.attributes.contenido}</p>

       </div>
      
    </article>
   </div>
  )
}

export default BlogSingleView
