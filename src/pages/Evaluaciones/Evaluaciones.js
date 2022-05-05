import React, { Component } from 'react';
import styles from './Dashboard.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Chart } from 'react-google-charts';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBBtn, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {
    Button, Navbar, Container, NavDropdown, Offcanvas, Nav, FormControl, Form,
    Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter,
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


            <Navbar style='background-color: var(--azul-2)' expand={false}>
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
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                                <NavLink className="nav-link active" to="/trabajadores">Trabajadores</NavLink>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item >
                                        <Link to="/evaluacion">Evaluacion</Link>
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

            <div className="container">
               



                </div>



        </div>
    );
}

export default Evaluaciones;