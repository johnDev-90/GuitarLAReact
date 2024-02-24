import React from 'react'
import { getBlogs } from '../src/Calls'
import { useLoaderData, Link } from 'react-router-dom';
import imgGuitar from '../public/img/test.jpg'
import { formatearFecha } from '../src/Calls';


export async function loader(){

    const blogs = await getBlogs();
  


    return blogs
    
}





const Blogs = ({setPost}) => {
    const blogs = useLoaderData();

    console.log(blogs)

   
  
  return (

    
    <div className='blogs-containers'>
        <div className='blogs-cards-container'>
            {blogs?.length && blogs.map(blog => {

                console.log(blog)
         const {attributes, contenido} = blog;

         const image = blog.attributes.image.data.attributes.formats.small.url

       
                         
           return(
            <div
            key={blog.id}
            className='blogs-card'>
            <img src={image} alt="" />
            <div className='text-blogs'>
            <p className='blog-Title'>{attributes.Title}</p>
            <span className='date '>{formatearFecha(attributes.publishedAt)}</span>
            <p className='resumen'>
                {attributes.contenido}
            </p>
            </div>
            
                <Link className='btn-blog hoverBtns' onClick={(e) => setPost(blog)} to={'/post'}>Read Blog</Link>
            
           </div>
           )



            })}

         


        </div>

        
      
    </div>
  )
}

export default Blogs
