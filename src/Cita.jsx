import React, {useState} from "react"
import 'bootstrap/css/bootstrap.min.css'
import {Link} from "react-router-dom"

import Axios from "axios"
function Cita() {

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [telefono, setTelefono] = useState("")
  
    //NUEVAS
    const [day, setDay] = useState("")
    const [hora, setHora] = useState("")
    
    const handleForm = (e) => {
      
      e.preventDefault()
  
      const data = {
        dni: dni,
        name: name,
        lastName: lastName,
        telefono: telefono,
        dia: day,
        horario: hora
      };
      Axios.post("http://localhost:8080/pacientes", data).then((res) => {
        console.log(res.data);
      });
    };

      
    return (
        <div className="cita" >
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><a href="/#">Clinica San Andrés</a></h1>
                
                <a href="/#" className="logo me-auto" ><img src="/assets/img/logo.png" alt=""/></a>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active" ><Link to="/resultados">Resultados</Link></li>
                    <li className="active" ><Link to="/">Inicio</Link></li>
                    </ul>
                </nav>
                
                </div>
            </header>

            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                    <h2>Reserva de Cita</h2>
                    <p></p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <form className="php-email-form mt-4">
                        <div className="row ">
                            <div className="col-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                placeholder="Nombre"
                                data-rule="minlen:4"
                                data-msg=""
                            />
                            </div>
                            <div className="col-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={(e) => setLastName(e.target.value)}
                                id="name"
                                placeholder="Apellido"
                                data-rule="minlen:4"
                                data-msg=""
                            />
                            </div>
                            <div className="col-6 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={(e) => setDni(e.target.value)}
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
                                onChange={(e) => setTelefono(e.target.value)}
                                id="name"
                                placeholder="Celular"
                                data-rule="minlen:4"
                                data-msg=""
                            />
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-6 form-group">
                            <p>Elija un horario</p>
                            <select className="form-control" name="horario" id="hora" onChange={(e)=>{
                            setHora(e.target.value)
                            }}>
                            <option value="">--Escoga un rango horario--</option>
                            <option value="9-10">09:00-10:00</option>
                            <option value="10-11">10:00-11:00</option>
                            <option value="11-12">11:00-12:00</option>
                            <option value="13-14">13:00-14:00</option>
                            <option value="14-15">14:00-15:00</option>
                            <option value="15-16">15:00-16:00</option>
                            <option value="16-17">16:00-17:00</option>
                            <option value="17-18">17:00-18:00</option>
                            <option value="18-19">18:00-19:00</option>
                            <option value="19-20">19:00-20:00</option>
                            <option value="20-21">20:00-21:00</option>
                            <option value="21-22">21:00-22:00</option>
                            </select>
                        </div>
                            
                        <div className="col-6 form-group">
                        <p>{"\n"}</p>
                            <input className="form-control" type="date" onChange={(e)=>{setDay(e.target.value)}}/>
                        </div>
                        
                        <div className="text-center">
                            
                            <button type="submit" onClick={handleForm}>
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
  
  export default Cita;