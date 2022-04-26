import React, { Component } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Chart } from 'react-google-charts';
import { NavLink } from 'react-router-dom';
import './Css_Trabajadores/Trabajadores.css';
import {
  MDBCard, MDBCardBody,MDBBtn, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardOverlay, MDBCardSubTitle,
  MDBCardTitle, MDBCardText, MDBCardGroup, MDBCardLink, MDBCol, MDBRow,
} from 'mdb-react-ui-kit';
import {
  Button, Navbar,Table,Container, NavDropdown, Offcanvas, Nav, FormControl, Form,
  Card, CardGroup, CardDeck, CardColumns, CardBody, CardHeader, CardFooter,
} from 'react-bootstrap';

import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";



class Trabajadores extends React.Component {

  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

        <Navbar bg="warning" expand={false}>
          <Container fluid>
            <Navbar.Brand href="../Dashboard/Dashboard" ><NavLink to="/Dashboard">EvaluatEasy</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Empleados</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" >Home</NavLink>
                  <NavLink to="#action2" >Link</NavLink>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3"  >Action</NavDropdown.Item>
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

        <div className='dashboard_list'>
        <Container>
          <div className='form_list'> 
            <Button type='button' className="btn btn-primary" onClick={this.abrirModal}>Agregar Nuevo Empleado</Button>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar empleado" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
          <Table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>NOMBRES</th>
                <th>APELLIDOS</th>
                <th>CARGO</th>
                <th>CORREO</th>
                <th>TELEFONO</th>
                <th></th>
              </tr>
            </thead>  
                
            <tbody>
              <tr>
                <td>id</td>
                <td>Samir</td>
                <td>Mosquera</td>
                <td>Desarrollador</td>
                <td>sosa@gmail.com</td>
                <td>23432423</td>
                <td>

                <div className="d-grid gap-2 d-md-block">

                  <a className="btn btn-primary" href="#" role="button">Editar</a>
                  <Button className="btn btn-danger" type='button'>Eliminar</Button>

                </div>  

                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        </div>

        <Modal isOpen={this.state.abierto} >
        <ModalHeader>
          Agregar Empleado
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">Nombres*</Label>
            <Input type="text" id="Nombre"/> 
          </FormGroup>
          <FormGroup>
            <Label for="apellido">Apellidos*</Label>
            <Input type="text" id="apellido"/> 
          </FormGroup>
          <FormGroup>
            <Label for="cargo">Cargo*</Label>
            <select className="form-select" id='cargo' aria-label="Default select example">
                <option selected disabled>Selecciona un cargo</option>
                <option value="Cocinero">Cocinero</option>
                <option value="Mesero">Mesero</option>
                <option value="Repartidor">Repartidor</option>
            </select> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Correo*</Label>
            <Input type="text" id="correo"/> 
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Telefono*</Label>
            <Input type="text" id="telefono"/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary">Agregar</Button>
            <Button color="secondary" onClick={this.abrirModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
       


      </div>
    );

  }
}


    export default Trabajadores;   
