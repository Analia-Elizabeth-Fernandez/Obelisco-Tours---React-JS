import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'

const Header = () => {
  

  return (
    <header>
      <nav>
        <ul>
          <img src="public/img/obelisco.png"  alt="logo" width="50" height="50"></img>
          <li><Link to='/' className='link'>Bienvenidos</Link></li>
          <li><Link to='/NuestrosTours' className='link'>Nuestros Tours</Link></li>
          <li><Link to='/PreguntasFrecuentes' className='link'>Preguntas Frecuentes</Link></li>
          <li><Link to='/Contacto' className='link'>Contacto</Link></li>
          <li className='cartnav'>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header