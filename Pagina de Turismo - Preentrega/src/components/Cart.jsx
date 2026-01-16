import React, { useContext, useState } from 'react';
import './styleCart.css';
import { CartContext } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
    const { cart, handleAddToCart, handleDeleteFromCart } = useContext(CartContext);
    const [showPaymentButtons, setShowPaymentButtons] = useState(false);

    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const iniciarPago = async (metodo) => { // Asegúrate de que diga "async" aquí
    try {
        const response = await fetch(
            `/.netlify/functions/checkout-${metodo}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cart }),
            }
        );

        // Esta es la línea 36 que causaba el error
        const data = await response.json(); 

        if (data.url) {
            window.location.href = data.url;
        } else {
            console.error("No se recibió la URL de Mercado Pago", data);
        }
    } catch (error) {
        console.error("Error al iniciar pago", error);
    }
};
            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error("Error al iniciar pago", error);
        }
    };

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

                {/* Botón Comprar */}
                {cart.length > 0 && !showPaymentButtons && (
                    <button 
                        className="btn-comprar"
                        onClick={() => setShowPaymentButtons(true)}
                    >
                        🛒 Comprar
                    </button>
                )}

                {/* Botones de pago */}
                {cart.length > 0 && showPaymentButtons && (
                    <div className="checkout-buttons">
                        <button 
                            className="btn-mp"
                            onClick={() => iniciarPago("mercadopago")}
                        >
                            💳 Pagar con Mercado Pago
                        </button>

                        <button 
                            className="btn-paypal"
                            onClick={() => iniciarPago("paypal")}
                        >
                            🌍 Pagar con PayPal
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Cart;











