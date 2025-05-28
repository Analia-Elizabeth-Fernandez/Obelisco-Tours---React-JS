import React, { useState } from 'react';
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import loading from '../assets/loading.gif';
import '../components/styleGral.css';

const PreguntasFrecuentes = ({ cart, borrarProducto, cargando }) => {
    const [activo, setActivo] = useState(null);

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    const preguntas = [
        {
            pregunta: "¿Cómo puedo reservar un tour?",
            respuesta: "Haz click en el botón 'Descripción' del tour seleccionado para obtener más detalle del mismo y/o agrégalo al carrito y haz click en la opción 'Comprar'."
        },
        {
            pregunta: "¿Está incluido el transporte? ¿Cómo funciona?",
            respuesta: "El transporte no está incluido en el precio. Al realizar la compra, es importante dejar asentados tus datos personales, teléfono y correo electrónico para que la agencia pueda contactarte y así poder realizar el pago"
        },
        {
            pregunta: "¿Cuáles son los medios de pago disponibles?",
            respuesta: "Podés abonar en efectivo, con tarjeta de crédito o débito, mediante transferencia o depósito bancario. Las compras pueden realizarse de forma online o presencialmente en nuestra oficina ubicada en Av. Corrientes 1464, CABA. También aceptamos pagos a través de billeteras virtuales como Mercado Pago, PayPal, Pix y LTC.En caso de optar por efectivo, el mismo deberá ser entregado en nuestras oficinas con un plazo máximo de 24 horas antes del inicio del tour."
        },
        {
            pregunta: "¿Tengo que confirmar mi compra después de pagar online?",
            respuesta: "No. Recibirás automáticamente un correo de confirmación con los datos de tu guía y detalles del servicio contratado."
        },
        {
            pregunta: "¿En qué idiomas se realiza el tour?",
            respuesta: "Nuestros tours esta impartido por nuestro guía en idiomas español, portugués e inglés."
        },
        {
            pregunta: "¿Tienen consideración para personas con necesidades dietéticas especiales o alergias?",
            respuesta: "Nuestros tours gastronómicos contemplan opciones para personas con dietas especiales, incluyendo celíacos, intolerancia a la lactosa y vegetarianos.Es de suma importancia que, en caso de poseer alergias alimentarias u otras necesidades dietéticas particulares, nos lo informe con anticipación para poder tomar las precauciones necesarias y garantizar su seguridad y bienestar."
        },
                {
            pregunta: "¿Cuentan con accesibilidad para personas con movilidad reducida?",
            respuesta: "Sí, nuestros tours están diseñados teniendo en cuenta la accesibilidad. Contemplamos opciones adaptadas para personas en silla de ruedas o con movilidad reducida, buscando garantizar una experiencia cómoda y segura para todos nuestros visitantes."
        },
    ];

    if (cargando) {
        return (
            <div className="loading-container">
                <img src={loading} alt="Cargando..." />
            </div>
        );
    }

    return (
        <>
            <Header borrarProducto={borrarProducto} cartItems={cart} />
            <main className="faq-container">
                <h2>Preguntas Frecuentes</h2>
                {preguntas.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggle(index)}>
                            {item.pregunta}
                            <span>{activo === index ? "▲" : "▼"}</span>
                        </div>
                        {activo === index && (
                            <div className="faq-answer">{item.respuesta}</div>
                        )}
                    </div>
                ))}
            </main>
            <Footer />
        </>
    );
};

export default PreguntasFrecuentes;