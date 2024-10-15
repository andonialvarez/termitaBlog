import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Links extends Component {
    render() {
        return (
            <div>
                <div className='title'>
                    <h1>
                        Termita <span>Blog</span>
                    </h1>
                    <img
                        src='https://i0.wp.com/www.cinemanet.info/wp-content/uploads/2019/05/Portada_Manual_Critica_Cine.jpg?fit=1000%2C554&ssl=1'
                        alt='imagen-header'
                    />
                </div>

                <div className='links'>
                    <div className='links-inicio'>
                        <Link to="/">
                            <div className="image-container">
                                <img src='https://uvp.mx/uvpblog/wp-content/uploads/2020/05/foto-sala-cine.jpg' alt="Inicio"></img>
                                <p className="image-text">Inicio</p> {/* Frase dentro de la imagen */}
                            </div>
                        </Link>
                    </div>
                    <div className='links-inicio'>
                        <Link to="/about">
                            <div className="image-container">
                                <img src='https://uvp.mx/uvpblog/wp-content/uploads/2020/05/foto-sala-cine.jpg' alt="About"></img>
                                <p className="image-text">About</p> {/* Frase dentro de la imagen */}
                            </div>
                        </Link>
                    </div>
                    <div className='links-inicio'>
                        <Link to="/contact">
                            <div className="image-container">
                                <img src='https://uvp.mx/uvpblog/wp-content/uploads/2020/05/foto-sala-cine.jpg' alt="About"></img>
                                <p className="image-text">Contact</p> {/* Frase dentro de la imagen */}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    };
}