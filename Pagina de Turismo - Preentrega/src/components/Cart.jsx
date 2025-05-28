import React, { useContext } from 'react';
import './styleCart.css';
import { CartContext } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
    const { cart, handleAddToCart, handleDeleteFromCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Carrito de Compras</h2>
                <button onClick={onClose} className="close-button">X</button>
            </div>

            <div className="cart-content">
                {cart.length === 0 ? (
                    <p className="cart-empty">El carrito está vacío</p>
                ) : (
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="item-info">
                                    <strong>{item.nombre}</strong>
                                    <p>Precio: USD {item.precio.toFixed(2)}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                </div>
                                <div className="item-controls">
                                    <button onClick={() => handleDeleteFromCart(item)}>-</button>
                                    <button onClick={() => handleAddToCart({ ...item, cantidad: 1 })}>+</button>
                                    <button onClick={() => handleDeleteFromCart({ ...item, cantidad: item.cantidad })}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {cart.length > 0 && (
                    <div className="cart-total">
                        <p><strong>Total:</strong> USD {total.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;

