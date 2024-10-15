import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const email = "colectivotermita@gmail.com";
    const [copied, setCopied] = useState(false); // Estado para indicar si el correo fue copiado

    // Función para copiar el email al portapapeles
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true); // Cambia el estado para mostrar que se copió
                setTimeout(() => setCopied(false), 3000); // Resetea el estado después de 3 segundos
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
    };

    return (
        <div className="contact-links">
            <a href='https://www.instagram.com/colectivotermita/' target="_blank" rel="noopener noreferrer" className="link">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href='https://x.com/Termitasss' target="_blank" rel="noopener noreferrer" className="link">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            {/* Botón que copia el correo al hacer clic */}
            <button onClick={copyToClipboard} className="email-button">
                {email}
            </button>
            {/* Mostrar mensaje temporal cuando se copia */}
            {copied && <span>¡Correo copiado!</span>}
        </div>
    );
}
