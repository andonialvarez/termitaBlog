import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLetterboxd } from '@fortawesome/free-brands-svg-icons'


export default function () {
    return <div className="footer">
        <div className="top">
            <div className="left column">
                <h1>Contact:</h1>
                <p>colectivotermita@gmail.com</p>
                <p><FontAwesomeIcon icon={faTwitter} /> @termitass</p>
                <p> <FontAwesomeIcon icon={faInstagram} /> @coletivotermita</p>
                

            </div >

            <div className="right column">
                <p>Center column</p>
            </div>
        </div>
        <div className="bottom">
            <h2>"© 2024 Andoni Alvarez. Todos los derechos reservados."</h2>


        </div >
    </div >
}


