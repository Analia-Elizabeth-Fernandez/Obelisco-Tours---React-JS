import React from 'react'
import { Link } from 'react-router-dom'
import  gif404 from '../assets/gif404.gif'


const NotFound = () => {

  return (
    <div>
      <h1>Error 404 - Página no encontrada</h1>
      <img src={gif404} alt='404' width="250" height="250"/>
      <br />
      <br />
      <button><Link to='/'>Volver al inicio</Link></button>
    </div>
  )
}

export default NotFound
