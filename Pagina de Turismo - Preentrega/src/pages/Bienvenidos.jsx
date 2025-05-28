import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from '../assets/loading.gif';
import '../components/styleGral.css'




const Bienvenidos = ({ cart, productos, cargando, agregarCarrito, borrarProducto }) => {
    
    if (cargando) {
        return (
            <div className="loading-container">
                <img src={loading} alt='cargando...'/>
            </div>
        );
    }
    
    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />

            <section>
                <video autoPlay muted loop className="video-header">
                    <source src="/video/Video CABA - Noche.mp4" type="video/mp4"/>
                        Tu navegador no soporta la reproducción del video
                </video>
            </section>

            <main className="main">
                <h2 className="titulo">Bienvenidos a Obelisco Tours</h2>
                <p>
                    Nos especializamos en ofrecer servicios turísticos de alta calidad, diseñados para brindarte una experiencia única y memorable. A través de nuestra plataforma, podrás acceder a una amplia variedad de opciones, incluyendo tours privados, recorridos por la ciudad (city tours), caminatas guiadas (walking tours) por la Ciudad de Buenos Aires, así como diversas experiencias personalizadas.
                </p>
                <p>
                    Nuestro principal objetivo es garantizar que disfrutes de cada momento, te relajes y vivas una experiencia enriquecedora, mientras exploras lo mejor de nuestra ciudad.
                </p>
            </main>
            <br />
            <Footer />
        </>
    );
};

export default Bienvenidos