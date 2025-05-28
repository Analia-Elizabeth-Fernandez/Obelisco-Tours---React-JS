import React, { useState } from 'react';
import './styleProductos.css';
import { Link } from 'react-router-dom';

const Productos = ({ producto, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <section className='card'>
      <div className='imagenContainer'>
        <img src={producto.imagen} alt={producto.nombre} className='imagen' />
      </div>

      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>{producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button onClick={() => { if (cantidad > 0) {agregarCarrito({ ...producto, cantidad });}}}>🛒 Agregar al carrito</button>

      <button className='verMasBtn' onClick={() => setMostrarDescripcion(!mostrarDescripcion)}>
        {mostrarDescripcion ? 'Ocultar' : 'Ver más'}
      </button>

      <div className={`descripcion-wrapper ${mostrarDescripcion ? 'expandir' : 'contraer'}`}>
        <p className='descripcion'>{producto.description}</p>
      </div>
    </section>
    
    
  );
};

export default Productos;