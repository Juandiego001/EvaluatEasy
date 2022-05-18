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

const data = [
  { id: 1, correo: "sami@gmail.com", contrasena: "sami", nombres: "Samir", apellidos: "Mosquera", cargo: "Gerente", tipo: "1", telefono: "3124567890" },
  { id: 2, correo: "cobito@gmail.com", contrasena: "cobito", nombres: "Diego", apellidos: "Cobo", cargo: "Auxiliar", tipo: "2", telefono: "3142345678" }
];

class Trabajadores extends React.Component {

  state = {
    data: data,
    modalCrear: false,
    modalActualizar: false,
    form:{
      id:'',
      correo: '',
      contrasena: '',
      nombres: '',
      apellidos: '',
      cargo: '',
      tipo: '',
      telefono: ''
    },
    
  };


  mostrarModalCrear=()=>{
    this.setState({
      modalCrear: true,
    });
  };

  cerrarModalCrear=()=>{
    this.setState({modalCrear: false});
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  setNombres = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        nombres: event.target.value,
      },
      nombres: event.target.value
    });
  };

  setApellidos = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        apellidos: event.target.value,
      },
      apellidos: event.target.value
    });
  };

  setCargo = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        cargo: event.target.value,
      },
      cargo: event.target.value
    });
  };

  setCorreo = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        correo: event.target.value,
      },
      correo: event.target.value
    });
  };

  setContrasena = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        contrasena: event.target.value,
      },
      contrasena: event.target.value
    });
  };

  setTelefono = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        telefono: event.target.value,
      },
      telefono: event.target.value
    });
  };

  setTipo = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        tipo: event.target.value,
      },
      tipo: event.target.value
    });
  };

  

  

  agregarEmpleado = () => {

    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalCrear: false, data: lista });

    alert('Se ejecuto la funcion');
    UsuariosService.postUsuarios(this.state.correo, this.state.contrasena, this.state.nombres, this.state.apellidos, this.state.cargo, this.state.tipo, this.state.telefono)
      .then(datos => {
        alert('Se ha creado el usuario con éxito');
      })

      .catch(error => {
        alert('Ocurrió un error al intentar crear un usuario');
      })
  };


  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombres = dato.nombres;
        arreglo[contador].apellidos = dato.apellidos;
        arreglo[contador].cargo = dato.cargo;
        arreglo[contador].correo = dato.correo;
        arreglo[contador].contrasena = dato.contrasena;
        arreglo[contador].tipo = dato.tipo;
        arreglo[contador].telefono = dato.telefono;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
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
                  <NavLink to="/Dashboard" >Home</NavLink>
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
                <th>CONTRASEÑA</th>
                <th>TIPO</th>
                <th>TELEFONO</th>
                <th></th>
              </tr>
            </thead>  
                
            <tbody>
              {this.state.data.map((dato)=>(
      
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.nombres}</td>
                    <td>{dato.apellidos}</td>
                    <td>{dato.cargo}</td>
                    <td>{dato.correo}</td>
                    <td>{dato.contrasena}</td>
                    <td>{dato.tipo}</td>
                    <td>{dato.telefono}</td>
                    <td>
                        <div className="d-grid gap-2 d-md-block">
                          <Button className="btn btn-primary" onClick={() => this.mostrarModalActualizar(dato)} role="button">Editar</Button>
                          <Button className="btn btn-danger" onClick={() => this.eliminar(dato)} type='button'>Eliminar</Button>
                        </div> 
                    </td>
                  </tr>
                
              ))}
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
            <Label for="correo">Tipo*</Label>
            <Input type="text" id="tipo"  onChange={this.setTipo}  /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Nombres*</Label>
            <Input type="text" id="nombres" onChange={this.setNombres} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Apellidos*</Label>
            <Input type="text" id="apellidos" onChange={this.setApellidos} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Cargo*</Label>
            <select className="form-select" id="cargo"  onChange={this.setCargo}  aria-label="Default select example">
              <option selected disabled>Elige una opcion</option>
              <option value='Gerente' >Gerente</option>
              <option value='Auxiliar'>Auxiliar</option>
              <option value='Mesero'>Mesero</option>
              <option value='Repartidor'>Repartidor</option>
              <option value='Cocinero'>Cocinero</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="correo">Correo*</Label>
            <Input type="text" id="correo" onChange={this.setCorreo} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Contraseña*</Label>
            <Input type="text" id="contrasena" onChange={this.setContrasena} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Telefono*</Label>
            <Input type="text" id="telefono" onChange={this.setTelefono}/> 
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={() => this.agregarEmpleado()}>Agregar</Button>
            <Button color="secondary" onClick={this.cerrarModalCrear}>Cerrar</Button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={this.state.modalActualizar}>
        <ModalHeader>
          Editar Empleado
        </ModalHeader>
        <ModalBody>
        <FormGroup>
            <Label for="correo">Tipo:</Label>
            <Input type="text" id="tipo"  onChange={this.setTipo} value={this.state.form.tipo}  /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Nombres:</Label>
            <Input type="text" id="nombres" onChange={this.setNombres} value={this.state.form.nombres} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Apellidos:</Label>
            <Input type="text" id="apellidos" onChange={this.setApellidos} value={this.state.form.apellidos} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Cargo:</Label>
            <select className="form-select" id="cargo"  onChange={this.setCargo} value={this.state.form.cargo}  aria-label="Default select example">
              <option selected disabled>Elige una opcion</option>
              <option value='Gerente' >Gerente</option>
              <option value='Auxiliar'>Auxiliar</option>
              <option value='Mesero'>Mesero</option>
              <option value='Repartidor'>Repartidor</option>
              <option value='Cocinero'>Cocinero</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="correo">Correo:</Label>
            <Input type="text" id="correo" onChange={this.setCorreo} value={this.state.form.correo} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Contraseña:</Label>
            <Input type="text" id="contrasena" onChange={this.setContrasena} value={this.state.form.contrasena} /> 
          </FormGroup>
          <FormGroup>
            <Label for="correo">Telefono:</Label>
            <Input type="text" id="telefono" onChange={this.setTelefono} value={this.state.form.telefono} /> 
          </FormGroup>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>Aceptar</Button>
            <Button color="secondary" onClick={this.cerrarModalActualizar}>Cerrar</Button>
        </ModalFooter>
        </ModalBody>
      </Modal>
       


      </div>
    );

  }
}


    export default Trabajadores;   
