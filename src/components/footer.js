import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const email = "colectivotermita@gmail.com";

    // Función para copiar el email al portapapeles
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("¡Correo electrónico copiado al portapapeles!");
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
    };

    return (
        <div className="footer">
            <div className="top">
                <div className="left column">
                    <h1>Contact:</h1>
                    <button onClick={copyToClipboard} className="email-button">
                       {email}
                    </button>
                    <a href="https://www.instagram.com/colectivotermita/" target="_blank" rel="noopener noreferrer" className="link">
                        <FontAwesomeIcon icon={faInstagram} /> - Instagram
                    </a>
                    <a href="https://x.com/Termitasss" target="_blank" rel="noopener noreferrer" className="link">
                        <FontAwesomeIcon icon={faTwitter} /> - Twitter
                    </a>
                </div>
                <div className="right column">
                <h1 style={{fontSize: "1.5rem"}}>Tambien nos podeis encontrar en:</h1>
                    
                    <a href="https://www.caimanediciones.es/" target="_blank" rel="noopener noreferrer" className="link">
                         - Caiman cdc
                    </a>
                    <a href="https://revistamutaciones.com/" target="_blank" rel="noopener noreferrer" className="link">
                         - Revista Mutaciones
                    </a>
                </div>
            </div>
            <div className="bottom">
                <h2>© 2024 Andoni Alvarez. Todos los derechos reservados.</h2>
            </div>
        </div>
    );
}
