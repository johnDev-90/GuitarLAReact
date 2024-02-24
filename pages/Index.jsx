import React from 'react'
import { getitems } from '../src/Calls'
import { Link, useLoaderData } from 'react-router-dom'
import Card from '../components/Card'
import { useState, useEffect } from "react"
import Blogs from './Blogs'

export async function loader(){

    

    const guitars = getitems()

    return guitars;

}

const Index = ({setGuitarInfo, setID, guitarInfo}) => {

    const guitars = useLoaderData()
   
  
  return (
    
    <main className='card-container'>
        <h1 className='titel-main'>Our Collection</h1>

        <div className='grid-main-container'>
            {guitars?.length && guitars.map( guitar =>(

                <Card 
                key={guitar.id}
                setGuitarInfo = {setGuitarInfo}
                guitarInfo = {guitarInfo}
                guitar = {guitar}  />
                

            ))}

          

        </div>

      

      
    </main>
  )
}

export default Index
