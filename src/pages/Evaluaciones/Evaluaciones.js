import React, { Component, Fragment } from 'react';
import styles from './Evaluaciones.css';
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
        <Fragment>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="example2">Medium input</label>
        <input type="text" id="example2" className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label htmlFor="example3">Se esfuerza por conocer y resolver las necesidades de los clientes, <br/>
        demuestra iniciativas para desarrollar excelentes  relaciones con clientes internos y externos.<br/>
         Logra la satisfacción de las necesidades del cliente de forma acertada y oportuna ofreciendo valor <br/>
         agregado y un balance costo-beneficio.</label>
      <MDBInput type="textarea" />
      </div>
    </Fragment>
      </div>


    </div>
  );
}

export default Evaluaciones;