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
import Menu from '../../components/Menu/Menu';

import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import UsuariosService from '../../services/UsuariosService/UsuariosService';


class Trabajadores extends React.Component {

  state = {
    modalCrear: false,
    modalActualizar: false,
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: ''
  };

  mostrarModalCrear=()=>{
    this.setState({
      modalCrear: true,
    });
  };

  cerrarModalCrear=()=>{
    this.setState({modalCrear: false});
  };

  mostrarModalActualizar = () => {
    this.setState({
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  setNombres = (event) => {
    this.setState({
      nombres: event.target.value
    });
  };

  setApellidos = (event) => {
    this.setState({
      apellidos: event.target.value
    });
  };

  setCargo = (event) => {
    this.setState({
      cargo: event.target.value
    });
  };  

  setCorreo = (event) => {
    this.setState({
      correo: event.target.value
    });
  };

  setTelefono = (event) => {
    this.setState({
      telefono: event.target.value
    });
  };

  agregarEmpleado = () => {
    alert('Se ejecuto la funcion');
    UsuariosService.postUsuarios(this.state.nombres, this.state.apellidos, this.state.cargo, this.state.correo, this.state.telefono)
      .then(datos => {
        alert('Se ha creado el usuario con éxito');
      })

      .catch(error => {
        alert('Ocurrió un error al intentar crear un usuario');
      })
  };

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

        <Menu />

        <div className='dashboard_list'>
        <Container>
          <div className='form_list'> 
            <Button type='button' className="btn btn-primary" onClick={this.mostrarModalCrear}>Agregar Nuevo Empleado</Button>
          
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

                  <Button className="btn btn-primary" onClick={this.mostrarModalActualizar} role="button">Editar</Button>
                  <Button className="btn btn-danger" type='button'>Eliminar</Button>

                </div>  

                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        </div>

        <Modal isOpen={this.state.modalCrear} >
        <ModalHeader>
          Agregar Empleado
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">Nombres*</Label>
            <Input type="text" id="Nombre" onChange={this.setNombres} /> 
          </FormGroup>
          <FormGroup>
            <Label for="apellido">Apellidos*</Label>
            <Input type="text" id="apellido" onChange={this.setApellidos} /> 
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
            <Input type="text" id="correo" onChange={this.setCorreo} /> 
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Telefono*</Label>
            <Input type="text" id="telefono" onChange={this.setTelefono}/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={this.agregarEmpleado}>Agregar</Button>
            <Button color="secondary" onClick={this.cerrarModalCrear}>Cerrar</Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={this.state.modalActualizar}>
        <ModalHeader>
          Editar Empleado
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
          <ModalFooter>
            <Button color="primary">Aceptar</Button>
            <Button color="secondary" onClick={this.cerrarModalActualizar}>Cerrar</Button>
        </ModalFooter>
        </ModalBody>
      </Modal>
       


      </div>
    );

  }
}


    export default Trabajadores;   
