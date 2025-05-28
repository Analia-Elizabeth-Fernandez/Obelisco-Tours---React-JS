import React from 'react';
import { Navigate } from 'react-router-dom';


const NuestrosTours = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {

    if (cargando) {
        return (
            <div className="loading-container">
                <img src={loading} alt='cargando...' />
            </div>
        );
    }

    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />

            <h2 className="titulo">Nuestros Tours</h2>
            {
                <ProductList agregarCarrito={agregarCarrito} productos={productos} />
            }
            <Footer />
        </>
    )
}

export default NuestrosTours