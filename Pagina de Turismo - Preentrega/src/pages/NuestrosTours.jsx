import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from '../assets/loading.gif'
import '../components/styleGral.css'


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