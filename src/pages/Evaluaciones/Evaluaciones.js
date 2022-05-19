import React, { Component, Fragment } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Chart } from 'react-google-charts';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { MDBInput, MDBContainer, MDBInputGroup } from "mdbreact";
import { MDBCard, MDBCardBody, MDBBtn, MDBCardTitle, MDBCardText, MDBCol, MDBRow, } from 'mdb-react-ui-kit';
import {
  Button, Navbar, Container, NavDropdown, Offcanvas, Nav, FormControl, Form,
  Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter, InputGroup, InputGroupAddon, InputGroupText,
} from 'react-bootstrap';

const Evaluaciones = () => {

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous"></script>

      <Navbar bg="info" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#" color='white'><b>EvaluatEasy</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
                <NavLink className="nav-link active" to="/trabajadores">Trabajadores</NavLink>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item >
                    <Link to="/evaluaciones">Evaluacion</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" >Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" id='Link'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Buscar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <h3>Evaluaciones</h3>
          </div>
          <div className='card-body'>
            <Fragment>
            <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Es la habilidad para participar conjunta, organizada y activamente en el logro de objetivos y metas comunes, 
                alineados a las estrategias de la organización, requiere facilidad para las relaciones interpersonales y capacidad para lograr sinergia 
                en el éxito de las labores del equipo. Colabora más allá del equipo para obtener resultados, crea y mantiene la confianza, promueve la inclusión
                 y el respeto por los demás. </label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
                <label htmlFor="example2">Supera las metas con éxito. Entrega resultados con un alto nivel de integridad, se enfoca en la ejecución,
                 monitorea resultados, asume nuevos retos, demuestra responsabilidad, toma decisiones, elimina barreras. 
                 Se mantiene concentrado en los objetivos a alcanzar. Consigue resultados sobresalientes.</label>
                 </div>
                 <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
                <label htmlFor="example2">Capacidad de escuchar, hacer preguntas y expresar conceptos e ideas de forma clara, concreta y oportuna, 
                para asegurar una transmisión de información efectiva a traves de la escritura y el lenguaje verbal y no verbal</label>
                 </div>
                 <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
                <label htmlFor="example2">Se esfuerza por conocer y resolver las necesidades de los clientes,
                  demuestra iniciativas para desarrollar excelentes relaciones con clientes internos y externos.
                  Logra la satisfacción de las necesidades del cliente de forma acertada y oportuna ofreciendo valor
                  agregado y un balance costo-beneficio.</label>
                  </div>
                  <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Es la habilidad para participar conjunta, organizada y activamente en el logro de objetivos y metas comunes, 
                alineados a las estrategias de la organización, requiere facilidad para las relaciones interpersonales y capacidad para lograr sinergia 
                en el éxito de las labores del equipo. Colabora más allá del equipo para obtener resultados, crea y mantiene la confianza, promueve la inclusión
                 y el respeto por los demás. </label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Capacidad para identificar y comprender rápidamente los cambios en el entorno de la organización, tanto interno como externo;
               transformar las debilidades  en fortalezas y potenciar  estas últimas a través  de planes de acción tendientes a  asegurar  en el largo plazo la presencia y 
               el posicionamiento de la organización y la consecución de las metas deseadas.</label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Es actuar para reducir al máximo la incertidumbre en su entorno. Se refleja en la continua comprobación y control del trabajo,
               información o la insistencia para que los roles y las funciones asignadas estén claras. Establece y mantiene sistemas de información.. </label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Claridad para fijar objetivos, prioridades y comunicarlos. Energía e interés por nuevos retos.  Influencia en los colaboradores
               para el logro de metas, dándoles confianza y facultándolos.  Habilidad para coordinar efectivamente a sus colaboradores.. </label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Habilidad para comprender rapidamente los cambios del entorno,  oportunidades del mercado, amenazas competitivas,
               fortalezas y debilidades de su área a la hora de identificar una optima respuesta estrategica para la organización. </label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
              <label htmlFor="example2">Habilidad para responder en forma oportuna y adecuada ante los problemas y situaciones del ámbito laboral y 
              de las interacciones personales, utilizando sus propios criterios, después de analizar y profundizar en los asuntos para tener un diagnóstico 
              objetivo que sirva como base para la solución de problemas y decisiones, utilizando el juicio y la sensatez de razonamiento. </label>
                 </div>
              <div className='card-body'>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Seleccione la calificación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              </div>
              <div className="form-group">
              <div className='card-header'>
                <label htmlFor="example3">Observaciones privadas</label>
                </div>
                <div className='card-body'>
                <MDBInput type="textarea" />
                </div>
              </div>
              <div className="card-footer">
                <button color="primary" type="submit">Guardar</button>
                </div>
            </Fragment>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Evaluaciones;