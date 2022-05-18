import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

// Components de React-Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Menu = (props) => {

  return (
    <>
      <Navbar className="vh-25" bg="primary" expand={false}>
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
