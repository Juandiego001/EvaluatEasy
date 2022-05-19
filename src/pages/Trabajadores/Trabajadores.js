import React, { useEffect } from 'react';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Css_Trabajadores/Trabajadores.css';
import Menu from '../../components/Menu/Menu';

// React-Bootstrap
import { Button, Table, Container } from 'react-bootstrap';

// Reactstrap
import { Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Label, Input, } from "reactstrap";

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService';

class Trabajadores extends React.Component {
  state = {
    losTrabajadores: [],

    // Modals
    modalCrear: false,
    modalActualizar: false,

    // Para actualizar
    elTrabajador: {
      correo: {
        original: '',
        nuevo: ''
      },
      contrasena: '',
      nombres: '',
      apellidos: '',
      cargo: 'Auxiliar',
      tipo: ''
    },
  };

  // Función o Hook para ejecutarse antes de renderizar el componente
  // con el fin de obtener todos los trabajadores que están registrados en la base de datos
  componentDidMount() {
    UsuariosService.getTrabajadores()
      .then(datos => {
        console.log(datos.data);
        this.setState(
          {
            losTrabajadores: datos.data
          }
        )
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener los trabajadores');
      })
  }

  // Modals
  mostrarModalCrear = () => {
    this.setState({modalCrear: true});
  };

  cerrarModalCrear = () => {
    this.setState({modalCrear: false});
  };

  // Cuando se muestre el modal,
  // se actualiza el state de elTrabajador
  mostrarModalActualizar = (trabajador) => {
    this.setState(
      {
        elTrabajador: trabajador,
        modalActualizar: true
      }
    );
  };

  // Cuando se cierra el modal,
  // el state elTrabajador vuelve a estar vacio
  // en cada uno de sus atributos
  cerrarModalActualizar = () => {
    this.setState(
        { 
          elTrabajador: {
            correo: {
              ...this.state.elTrabajador.correo,
              nuevo: ''
            },
            contrasena: '',
            nombres: '',
            apellidos: '',
            cargo: '',
            tipo: ''
          },
          modalActualizar: false 
        }
      );
  };
  

  // El trabjador que será actualizado
  setElTrabajador = (trabajador) => {
    this.setState({
      elTrabajador: {
        correo: trabajador.correo,
        contrasena: trabajador.contrasena,
        nombres: trabajador.nombres,
        apellidos: trabajador.apellidos,
        cargo: trabajador.cargo,
        tipo: trabajador.tipo
      }
    })
  }

  // Setters para actualizar y para crear
  setCorreo = (event) => {
    this.setState({
      elTrabajador: {
        ...this.state.elTrabajador,
        correo: {
          ...this.state.elTrabajador.correo,
          nuevo: event.target.value
        }
      }
    });
  };

  setContrasena = (event) => {
    this.setState({
      elTrabajador: {
        ...this.state.elTrabajador,
        contrasena: event.target.value,
      }
    });
  };

  setNombres = (event) => {
    this.setState({
      elTrabajador: {
        ...this.state.elTrabajador,
        nombres: event.target.value
      }
    });
  };

  setApellidos = (event) => {
    this.setState({
      elTrabajador: {
        ...this.state.elTrabajador,
        apellidos: event.target.value
      }
    });
  };

  setCargo = (event) => {
    this.setState({
      elTrabajador: {
        ...this.state.elTrabajador,
        cargo: event.target.value
      }
    });
  };

  setTipo = (event) => {
    this.setState({
      elTrabajador: {
        ...this.state.elTrabajador,
        tipo: event.target.value
      }
    });
  };
  // ----------------------------------------------------

  agregarTrabajador = () => {
    let correo = this.state.elTrabajador.correo.nuevo;
    let contrasena = this.state.elTrabajador.contrasena;
    let nombres = this.state.elTrabajador.nombres;
    let apellidos = this.state.elTrabajador.apellidos;
    let cargo = this.state.elTrabajador.cargo;
    let tipo = this.state.elTrabajador.tipo;

    if (correo == '' || contrasena == '' || nombres == '' || 
        apellidos == '' || cargo == '' || tipo == ''){
          alert('Por favor digita todos los campos obligatorios para agregar el empleado.');
    } else {
      UsuariosService.postUsuarios(correo, contrasena, nombres, apellidos, cargo, tipo)
        .then(datos => {
          alert('¡Se ha creado el usuario con éxito!');

          let nuevoLosTrabajadores = this.state.losTrabajadores;
          nuevoLosTrabajadores.push(
            {
              correo: {
                original: correo,
                nuevo: correo
              },
              contrasena,
              nombres,
              apellidos,
              cargo,
              tipo
            }
          );

          this.setState({
            losTrabajadores: nuevoLosTrabajadores
          });

        })
        .catch(error => {
          alert('Ocurrió un error al intentar crear un usuario');
        })
    }
  };


  editarTrabajador = () => {
    let correo = this.state.elTrabajador.correo.original;
    let nuevoCorreo = this.state.elTrabajador.correo.nuevo;
    let contrasena = this.state.elTrabajador.contrasena;
    let nombres = this.state.elTrabajador.nombres;
    let apellidos = this.state.elTrabajador.apellidos;
    let cargo = this.state.elTrabajador.cargo;
    let tipo = this.state.elTrabajador.tipo;

    UsuariosService.putTrabajadores(correo, nuevoCorreo, contrasena, nombres, apellidos,
        cargo, tipo)
        .then(datos => {
          console.log(datos);
          alert('¡Los datos han sido actualizados con éxito!');
          this.componentDidMount();
          this.cerrarModalActualizar();
        })
        .catch(err => {
          console.log(err);
          alert('Ocurrió un error al intentar actualizar los datos del trabajador.');
        })
  };

  eliminarTrabajador = (trabajador) => {
    let seguro = window.confirm("¿Está seguro que desea eliminar el trabajador con nombres: " + trabajador.nombres + "?");

    if (seguro) {
      UsuariosService.deleteUsuarios(trabajador.correo.original)
        .then(datos => {
          console.log(datos);
          alert('¡El trabajador ha sido eliminado con éxito!');
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
          alert('Ocurrió un error al intentar eliminar el trabjador.');
        })
    }
  };
  
  render() {
    return (
      <div>
        <Menu />

        <div className='dashboard_list'>
          <Container>
            <div className='form_list'> 
              <Button type='button' className="btn btn-primary text-capitalize" onClick={this.mostrarModalCrear}>Agregar trabajador</Button>

              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar empleado" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
            <Table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>CORREO</th>
                  <th>CONTRASEÑA</th>
                  <th>NOMBRES</th>
                  <th>APELLIDOS</th>
                  <th>CARGO</th>
                  <th>TIPO</th>
                  <th className="text-center">ACCIÓN</th>
                </tr>
              </thead>  

              <tbody>
                {
                  this.state.losTrabajadores.map((trabajador, index)=>(
                  
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{trabajador.correo.original}</td>
                        <td>{trabajador.contrasena}</td>
                        <td>{trabajador.nombres}</td>
                        <td>{trabajador.apellidos}</td>
                        <td>{trabajador.cargo}</td>
                        <td>{trabajador.tipo}</td>
                        <td>
                            <div className="d-flex justify-content-center">
                              <Button className="btn btn-primary me-2 text-capitalize" onClick={() => this.mostrarModalActualizar(trabajador)} role="button">Editar</Button>
                              <Button className="btn btn-danger ms-2 text-capitalize" onClick={() => this.eliminarTrabajador(trabajador)} type='button'>Eliminar</Button>
                            </div> 
                        </td>
                      </tr>  
                    )
                  )
                }
              </tbody>
            </Table>
          </Container>
        </div>

        {/* Modal de crear empleado */}
        <Modal isOpen={this.state.modalCrear} >
          <ModalHeader>
            Agregar Empleado
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="correo">Correo*</Label>
              <Input type="text" type="email" id="correo" onChange={this.setCorreo} /> 
            </FormGroup>
            <FormGroup>
              <Label for="correo">Contraseña*</Label>
              <Input type="text" type="password" id="contrasena" onChange={this.setContrasena} /> 
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
              <Label for="correo">Tipo*</Label>
              <Input type="text" type="number" id="tipo"  onChange={this.setTipo}  /> 
            </FormGroup>
            <FormGroup>
              <Label for="correo">Cargo*</Label>
              <select className="form-select" id="cargo"  onChange={this.setCargo}  aria-label="Default select example">
                <option defaultValue disabled>Elige una opcion</option>
                <option value='Auxiliar'>Auxiliar</option>
                <option value='Mesero'>Mesero</option>
                <option value='Repartidor'>Repartidor</option>
                <option value='Cocinero'>Cocinero</option>
              </select>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
              <Button color="primary" onClick={this.agregarTrabajador}>Agregar</Button>
              <Button color="secondary" onClick={this.cerrarModalCrear}>Cerrar</Button>
          </ModalFooter>
        </Modal>

        {/* Modal de editar empleado */}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            Editar Empleado
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="correo">Correo:</Label>
              <Input type="text" id="correo" onChange={this.setCorreo} value={this.state.elTrabajador.correo.nuevo} /> 
            </FormGroup>
            <FormGroup>
              <Label for="correo">Contraseña:</Label>
              <Input type="text" id="contrasena" onChange={this.setContrasena} value={this.state.elTrabajador.contrasena} /> 
            </FormGroup>
            <FormGroup>
              <Label for="correo">Nombres:</Label>
              <Input type="text" id="nombres" onChange={this.setNombres} value={this.state.elTrabajador.nombres} /> 
            </FormGroup>
            <FormGroup>
              <Label for="correo">Apellidos:</Label>
              <Input type="text" id="apellidos" onChange={this.setApellidos} value={this.state.elTrabajador.apellidos} /> 
            </FormGroup>
            <FormGroup>
              <Label for="correo">Cargo:</Label>
              <select className="form-select" id="cargo" onChange={this.setCargo} defaultValue={this.state.elTrabajador.cargo} aria-label="Default select example">
                <option>Elige una opcion</option>

                {
                  this.state.elTrabajador.cargo == 'Auxiliar' ?
                    <option defaultValue value='Auxiliar'>Auxiliar</option>
                  :
                    <option value='Auxiliar'>Auxiliar</option>
                }

                {
                  this.state.elTrabajador.cargo == 'Mesero' ?
                    <option defaultValue value='Mesero'>Mesero</option>
                  :
                    <option value='Mesero'>Mesero</option>
                }

                {
                  this.state.elTrabajador.cargo == 'Repartidor' ?
                    <option defaultValue value='Repartidor'>Repartidor</option>
                  :
                    <option value='Repartidor'>Repartidor</option>
                }

                {
                  this.state.elTrabajador.cargo == 'Cocinero' ?
                  <option defaultValue value='Cocinero'>Cocinero</option>
                :
                  <option value='Cocinero'>Cocinero</option>
                }

              </select>
            </FormGroup>
            <FormGroup>
              <Label for="correo">Tipo:</Label>
              <Input type="text" id="tipo"  onChange={this.setTipo} value={this.state.elTrabajador.tipo}  /> 
            </FormGroup>
            <ModalFooter>
                <Button color="primary" onClick={this.editarTrabajador}>Aceptar</Button>
                <Button color="secondary" onClick={this.cerrarModalActualizar}>Cerrar</Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


export default Trabajadores;   
