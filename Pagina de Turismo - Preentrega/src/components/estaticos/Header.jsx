import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import { CartContext } from '../../context/CartContext';
import './styleEstatico.css';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src="/img/obelisco.png" alt="logo" />
          </li>
          <li><Link to="/" className="link">Bienvenidos</Link></li>
          <li><Link to="/NuestrosTours" className="link">Nuestros Tours</Link></li>
          <li><Link to="/PreguntasFrecuentes" className="link">Preguntas Frecuentes</Link></li>
          <li><Link to="/Contacto" className="link">Contacto</Link></li>

          {/* Carrito integrado en el header */}
          <li className="cartnav">
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;









