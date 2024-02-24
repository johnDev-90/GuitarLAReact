import React from 'react'
import imgAbout from '../public/img/test.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (

    <div>
        
           <main className='container-about'>

<h2 className='heading'>About us</h2>
       
     <div className='contenido-blogs'>
        
     <div>
       
        <img src={imgAbout} alt="about us image" />
       </div>

        <div className='about-text'>
            <p>
            Vestibulum interdum cursus ex et maximus. Curabitur a metus mauris. Phasellus hendrerit 
            dolor eu cursus vehicula. Fusce in nisi ex. Praesent non semper eros. Curabitur id nisi 
            eget diam cursus bibendum vitae at lorem. Etiam efficitur tempus elementum. Pellentesque 
            quam nibh, placerat nec tortor in, rhoncus vulputate nisl. Cras iaculis lorem in turpis 
            placerat semper. Fusce vitae felis vehicula, facilisis magna placerat, dignissim lacus. 
            </p>
            <p>
            Vestibulum interdum cursus ex et maximus. Curabitur a metus mauris. Phasellus hendrerit 
            dolor eu cursus vehicula. Fusce in nisi ex. Praesent non semper eros. Curabitur id nisi 
            eget diam cursus bibendum vitae at lorem. Etiam efficitur tempus elementum. Pellentesque 
            quam nibh, placerat nec tortor in, rhoncus vulputate nisl. Cras iaculis lorem in turpis 
            placerat semper. Fusce vitae felis vehicula, facilisis magna placerat, dignissim lacus. 
            </p>
        </div>
     </div>

        
    </main> 
    </div>
  )
}

export default About
