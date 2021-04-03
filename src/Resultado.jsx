import React from 'react';
import 'bootstrap/css/bootstrap.min.css'
import './assets/css/style2.css'
import {Link } from "react-router-dom"

function Resultado() {
    return (
        <div className="cita" >
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/#">Clinica San Andrés<span></span></a></h1>
                
                <a href="/#" className="logo me-auto" ><img src="/assets/img/logo.png" alt=""/></a>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active" ><Link to="/">Inicio</Link></li>
                    </ul>
                </nav>
                
                </div>
            </header>

            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                    <h2>Resultado</h2>
                    <p></p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <form className="php-email-form mt-4 ">
                        <div className="row ">
                            
                            <div className="col-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="DNI"
                                data-rule="minlen:8"
                                data-msg="Ingrese 8 dígitos "
                            />
                            </div>
                            <div className="col-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Apellido Materno"
                                data-rule="minlen:4"
                                data-msg=""
                            />
                            </div>
                        </div>
                        <div className="row">

                        <div className="text-center">
                            
                            <button type="submit" >
                            Enviar
                            </button> 
                        </div>
                        </div>    
                        
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default Resultado;