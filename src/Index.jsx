import React, {useState} from "react"
import { Accordion, Card, Tabs, Tab } from 'react-bootstrap'
import Owlcarousel from 'react-owl-carousel'  
import Axios from "axios"
import "./assets/css/style.css"
import {Link} from "react-router-dom"

function Index (){

  const [dni, setDni] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [telefono, setTelefono] = useState("")


  
  const handleForm = (e) => {
    
    e.preventDefault()

    const data = {
      dni: dni,
      name: name,
      lastName: lastName,
      telefono: telefono
    };
    Axios.post("https://backend-clinica2331.herokuapp.com/validacion", data).then((res) => {
      console.log(res.data);
    });
  };


  return(

<div className="index">
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="/#">Clinica San Andrés<span></span></a></h1>
      
      <a href="/#" className="logo me-auto" ><img src="/assets/img/logo.png" alt=""/></a>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active" ><a  href="#header">Inicio</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#team">Especialistas</a></li>
          <li><a href="#contact">Contáctanos</a></li>
        </ul>
      </nav>
      
    </div>
  </header>


  <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100" >
      <div className="row">
        <div className="col-xl-6">
          <h1>La Primera Clínica de Huaral </h1>
          <h2>Comprometidos con tu bienestar.</h2>
          <Link to="/cita" className="btn-get-started scrollto">Reserva tu prueba COVID-19</Link>
        </div>
      </div>
    </div>
  </section>

  <main id="main">

    <section id="clients" className="clients">
      <div className="section-title">
        <h2>Nuestros Convenios</h2>
        <p></p>
      </div>
      <div className="container" data-aos="zoom-in">
        <Owlcarousel className="owl-carousel clients-carousel"   >
          <img src="../assets/img/clinic/rimacseguros.png" alt=" "  />      
        </Owlcarousel>
      </div>
    </section>

    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="content col-xl-5 d-flex align-items-stretch">
            <div className="content">
              <h3>Nosotros</h3>
              <h5><p>
                Somos la primera clínica de Huaral que brinda un servicio de primera a toda la población.
              </p></h5>
            </div>
          </div>

          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-buildings"></i>
                  <h4>Infraestructura</h4>
                  <p>Tenemos la infraestructura adecuada para poder manejar blah blah blah</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-buoy"></i>
                  <h4>Tecnología</h4>
                  <p>La tecnología necesaria para todas las especialidades que ofrecemos.</p>
                </div>
                <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-user"></i>
                  <h4>Médicos</h4>
                  <p>Contamos con los mejores médicos para brindar la confianza a los pacientes. </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="servicios" className="servicios">
      <div className="container" data-aos="fade-up">
      <div className="section-title">
          <h2>Servicios</h2>
          <p></p>
      </div>
        <Tabs defaultActiveKey="profile" className="nav-tabs col d-flex">
        
          <Tab eventKey="home" title="Hospitalización" className="nav-link col-12" >
            <div className="tab-item-wrapper " data-aos="fade-up" data-aos-delay="100">
              <h3>La salud de tu ser querido en las mejores manos</h3>
              <p className="font-italic">La hospitalización de la Clínica San Andrés consiste en la continuación del tratamiento hospitalario, asegurando el soporte asistencial y médico, así como, 
              el suministro y aplicación de medicamentos según defina el médico tratante, en función al diagnóstico y condición.</p>
            </div>
          </Tab>

          <Tab eventKey="profile" title="Emergencia" className="nav-link col-12" >
            <div className="tab-item-wrapper" data-aos="fade-up" data-aos-delay="200">
              <h3>Preparados para cualquier accidente</h3>
              <p>Nuestra área de emergencia cuenta con médicos preparados para cualquier tipo de accidente, además de tener enfermeros preparados para una atención rápida.</p>
            </div>
          </Tab>

          <Tab eventKey="contact" title="Farmacia" className="nav-link col-12" >
            <div className="tab-item-wrapper " data-aos="fade-up" data-aos-delay="300">
              <h3>Fármacos de calidad para nuestros pacientes</h3>
              <p>Contamos con los principales fármacos para ayudar a nuestros pacientes a recibir su tratamiento a tiempo.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
    
    <section id="especialidades" className="especialidades section-bg ">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Especialidades</h2>
          <p></p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
             <i className="icofont-doctor-alt"></i>
              <h4>Medicina</h4>
              <p>Contamos con una área de farmacia que tiene una amplia gama de fármacos, para la disposición de nuestros pacientes.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="icofont-surgeon"></i>
              <h4>Cirugía General</h4>
              <p>Tenemos médicos con amplia experiencia en cirugía para brindar la confianza a nuestros pacientes.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="icofont-stretcher"></i>
              <h4>Oftalmología</h4>
              <p>Los especialistas trabajan en estrecha colaboración contigo y 
                tu equipo de atención médica para comprender y atender tus necesidades oculares.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <i className="icofont-surgeon-alt"></i>
              <h4>Dermatología</h4>
              <p>Brindamos atención integral a las personas que buscan respuestas sobre afecciones
                 y enfermedades de la piel, las membranas mucosas y el cabello. </p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <i className="icofont-patient-bed"></i>
              <h4>Traumatología</h4>
              <p>Especialistas para la rehabilitación de la forma y función de las extremidades, columna y estructuras asociadas.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="600">
              <i className="icofont-test-bottle"></i>
              <h4>Urología</h4>
              <p>Especialistas en el diagnóstico y tratamiento de problemas que
                 involucran el tracto urinario masculino y femenino y los órganos reproductores masculinos. </p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="700">
              <i className="icofont-icu"></i>
              <h4>Gastroenterología</h4>
              <p>Tenemos los médicos especialistas sumamente experimentados que atienden a personas con trastornos hepáticos y del tubo digestivo.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="800">
              <i className="icofont-nurse"></i>
              <h4>Gineco Obstetricia</h4>
              <p>Especialistas proporcionan diagnósticos precisos, tratamientos ambulatorios para trastornos comunes y complejos del tracto reproductivo femenino. </p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="900">
              <i className  ="icofont-heart-beat-alt"></i>
              <h4>Cardiología</h4>
              <p>Los cardiólogos pediátricos trabajan con especialistas en muchas áreas para proporcionarle a tu hijo exactamente el cuidado médico que necesita. </p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="1000">
              <i className="icofont-crutch"></i>
              <h4>Terapia Física</h4>
              <p>Especialistas en Terapia Física ayudan a restaurar el movimiento y la función en personas con discapacidades ocasionadas por enfermedades o lesiones.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="1100">
              <i className="icofont-brain-alt"></i>
              <h4>Psicología</h4>
              <p>Especialistas altamente capacitados brindan atención experta a adultos, adolescentes y niños con trastornos mentales, adictivos y emocionales.</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="1200">
              <i className="icofont-xray"></i>
              <h4>Ecografías</h4>
              <p>Especialistas en ecografías realizan pruebas de imagen avanzadas y de alta calidad para el diagnóstico, así como una serie de terapias guiadas por imágenes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="preguntas" className="preguntas">
      <Accordion>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Preguntas frecuentes</h2>
        </div>

        <ul className="faq-list accordion" data-aos="fade-up" data-aos-delay="200">
        <li>
          <Card >
            < Accordion.Toggle as ={Card.Header} eventKey="0" className="p1" >¿Cuál es el horario de atención? </ Accordion.Toggle>
            < Accordion.Collapse eventKey="0" >
              < Card.Body className="card1">
              <p>
                Atendemos de Lunes a Viernes.
                {"\n"} De 8 a.m. hasta las 8 p.m.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </li>
        <li>
          <Card>
            < Accordion.Toggle as ={Card.Header} eventKey="1" className="p1">¿Atienden pacientes con Covid-19? </ Accordion.Toggle>
            < Accordion.Collapse eventKey="1" >
              < Card.Body >
              <p>
                No, sólo realizamos pruebas rápidas.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </li>

        <li>
          <Card>
            < Accordion.Toggle as ={Card.Header} eventKey="2" className="p1">¿Realizan citas virtuales? </ Accordion.Toggle>
            < Accordion.Collapse eventKey="2" >
              < Card.Body >
              <p>
               No. :)
              </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </li>

        <li>
          <Card>
            < Accordion.Toggle as ={Card.Header} eventKey="3" className="p1">¿Cuentan con ambulancia propia? </ Accordion.Toggle>
            < Accordion.Collapse eventKey="3" >
              < Card.Body >
              <p>
                No, no contamos con ambulancia.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </li>

        <li>
          <Card>
            < Accordion.Toggle as ={Card.Header} eventKey="4" className="p1">¿Atienden pacientes por emergencia? </ Accordion.Toggle>
            < Accordion.Collapse eventKey="4" >
              < Card.Body >
              <p>
               Eso no lo sé manito jeje.
              </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </li>
        </ul>

      </div>
      </Accordion>
    </section>

    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Staff Médico</h2>
          <p></p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src="/assets/img/team/team-1.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="member-img">
                <img src="/assets/img/team/team-2.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="member-img">
                <img src="/assets/img/team/team-3.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="400">
              <div className="member-img">
                <img src="/assets/img/team/team-4.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contáctanos</h2>
          <p></p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-map"></i>
                  <h3>Dirección</h3>
                  <p>Calle Aurora de los Incas N°288{"\n"} (Al costado del complejo Las Dalias) - Huaral </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                <i class='bx bxs-map-pin'></i>
                  <h3>Mapa</h3>
                  <a href="https://www.google.com/maps/dir/-11.5018306,-77.2060235/-11.4918424,-77.2136736/@-11.4928991,-77.2134778,18.5z/data=!4m4!4m3!1m1!4e1!1m0"><p>Click Aquí{"\n"}{"\n"}</p></a> 
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email</h3>
                  <p>clinicasanandres.huaral@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Teléfono</h3>
                  <p>969497766  o  (01)7616083</p>
                </div>
              </div>
            </div>
          </div>

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

  </main>

 
  <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer-contact">
            <h3>Clinica San Andrés<span>.</span></h3>
            <p>
            {"Calle Aurora de los Incas N°288\n (Al costado del complejo Las Dalias) - Huaral "}{"\n"}
              <strong>Teléfono:</strong> 969497766 o (01)7616083{"\n"}
              <strong>Email:</strong> clinicasanandres.huaral@gmail.com
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Nosotros</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a  href="#header">Inicio</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#about">Nosotros</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#tabs">Servicios</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#services">Especialidades</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#team">Especialistas</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-left">
        <div className="copyright">
          &copy; Copyright <strong><span>Clínica San Andrés</span></strong>. Todos los derechos reservados
        </div>
        <div className="credits">
          Diseñado por The Lokithos
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://www.facebook.com/clinicasanandresoficial" className="facebook"><i className="bx bxl-facebook"></i></a>
      </div>
    </div>
  </footer>
 
  
</div>
);}
export default Index;