import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import {
  Button, Navbar, Container, NavDropdown, Offcanvas, Nav, FormControl, Form,
  Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const Menu = (props) => {

  return (
    <>
      {/* Links necesarios para el funcionamiento de react-bootstrap */}
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

      <Navbar bg="primary" expand={false}>
        <Container fluid>
          <Navbar.Brand className="text-white" ><b>EvaluatEasy</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="text-white" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="text-white"
          >
            <Offcanvas.Header closeButton className="bg-primary">
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-primary text-white">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                  <NavLink className="nav-link active text-white" aria-current="page" to="/home-gerentes">Dashboard</NavLink>
                  <NavLink className="nav-link active text-white" to="/trabajadores">Trabajadores</NavLink>
                  <NavLink className="nav-link active text-white" to="/evaluaciones">Evaluaciones</NavLink>
                  <NavLink className="nav-link active text-white" to="/configuracion-gerentes">Configuración</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
