import React from "react";
import './styleEstatico.css';

const Footer = () => {
    return (
        <footer>

            <ul className="footer-redes">
                <li>
                    <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
                        <img src="/img/instagram.svg" alt="Instagram" width="40" height="40" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/541167981270" target="_blank" rel="noopener noreferrer">
                        <img src="/img/whatsapp.svg" alt="WhatsApp" width="40" height="40" />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer">
                        <img src="/img/linkedin.svg" alt="LinkedIn" width="40" height="40" />
                    </a>
                </li>
                <li>
                    <a href="mailto:correo@ejemplo.com">
                        <img src="/img/email.svg" alt="Email" width="40" height="40" />
                    </a>
                </li>
            </ul>
            &copy; 2025 Obelisco Tours - Todos los derechos reservados | Empresa de viajes y turismo
            <br />
        </footer>
    );
};

export default Footer;