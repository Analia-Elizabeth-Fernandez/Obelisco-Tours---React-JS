import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from '../assets/loading.gif';
import '../components/styleGral.css';

const Contacto = ({ cargando }) => {
    if (cargando) {
        return (
            <div className="loading-container">
                <img src={loading} alt='cargando...' />
            </div>
        );
    }

    return (
        <>
            <Header/>
            <div className="contacto-container">
                <h2>Contacto</h2>

                
                <div className="contacto-contenedor">
                    {/* Mapa */}
                    <div className="mapa">
                        
                        <iframe
                            title="Ubicación en Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621.0562972841312!2d-58.38860833197157!3d-34.60424009536055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb8863b2ff21%3A0xc886a0c5825d0f31!2sOlympo%20Sky%20Bar!5e0!3m2!1ses!2sar!4v1731727678861!5m2!1ses!2sar"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Formulario */}
                    <div className="formulario">
                        <h3>Formulario de Contacto</h3>
                        <form action="https://formspree.io/f/meoqzblj" method="POST">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />

                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" name="apellido" id="apellido" placeholder="Ingrese su apellido" />

                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="Ingrese su email" />

                            <label htmlFor="telefono">Teléfono:</label>
                            <input type="text" name="telefono" id="telefono" placeholder="Ingrese su teléfono" />

                            <label htmlFor="mensaje">Consultas / Sugerencias:</label>
                            <textarea name="mensaje" id="mensaje" placeholder="Escriba su consulta o sugerencia"></textarea>

                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contacto;