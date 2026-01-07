import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styleEstatico.css';
import { CartContext } from '../context/CartContext'; // tu contexto del carrito

const Header = () => {
  const { cart } = useContext(CartContext); // para mostrar la cantidad de items

  return (
    <header>
      <nav>
        <ul>
          <img src="/img/obelisco.png" alt="logo" width="50" height="50" />
          <li><Link to='/' className='link'>Bienvenidos</Link></li>
          <li><Link to='/NuestrosTours' className='link'>Nuestros Tours</Link></li>
          <li><Link to='/PreguntasFrecuentes' className='link'>Preguntas Frecuentes</Link></li>
          <li><Link to='/Contacto' className='link'>Contacto</Link></li>
          {/* carrito integrado como icono */}
          <li className="cartnav">
            <button className="btnCart">
              <i className="fa-solid fa-cart-shopping"></i>
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





