import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleEstatico.css'
import Cart from '../Cart'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); 
  

  return (
    <header>
      <nav>
        <ul>
          <img src="/img/obelisco.png" alt="logo" width="50" height="50" />
          <li><Link to='/' className='link'>Bienvenidos</Link></li>
          <li><Link to='/NuestrosTours' className='link'>Nuestros Tours</Link></li>
          <li><Link to='/PreguntasFrecuentes' className='link'>Preguntas Frecuentes</Link></li>
          <li><Link to='/Contacto' className='link'>Contacto</Link></li>
           <li className="cartnav">
            <button className="btnCart" onClick={() => setIsCartOpen(!isCartOpen)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </li>
        </ul>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;




