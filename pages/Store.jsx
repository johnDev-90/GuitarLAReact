import React from 'react'
import { getitems } from '../src/Calls'
import { Link, useLoaderData } from 'react-router-dom'
import Card from '../components/Card'
import { useState, useEffect } from "react"
import Index from './Index'

export async function loader(){

    

    const guitars = getitems()

    return guitars;

}

const Store = ({setGuitarInfo, guitarInfo}) => {

    const guitars = useLoaderData()
   
  console.log(guitars)
  return (
    
    <main className='card-container'>
        <h1 className='titel-main'>our Products</h1>
      
    </main>
  )
}

export default Store
