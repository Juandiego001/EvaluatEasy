import React, { useEffect, useState } from 'react';
import stlyes from './TrabajadoresGerentes.module.css';
import Menu from '../../components/Menu/Menu';

// React-Bootstrap
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService';

const TrabajadoresGerentes = (props) => {
  const [losTrabajadores, setLosTrabajadores] = useState([]);
  const [modalCrear, setModalCrear] = useState(false);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [elTrabajador, setElTrabajador] = useState({
    correo: {
      original: '',
      nuevo: ''
    },
    contrasena: '',
    nombres: '',
    apellidos: '',
    cargo: '',
    tipo: ''
  });
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tipo, setTipo] = useState('');
  const [cargo, setCargo] = useState('');

  // Funciones handle
  function handleCorreo(e) {
    let trabajador = {
      ...elTrabajador,
      correo: {
        original: elTrabajador.correo.original,
        nuevo: e.target.value
      }
    }
    setElTrabajador(trabajador);
  }

  function handleContrasena(e) {
    setContrasena(e.target.value);
  }

  function handleNombres(e) {
    setNombres(e.target.value);
  }

  function handleApellidos(e) {
    setApellidos(e.target.value);
  }

  function handleTipo(e) {
    setTipo(e.target.value);
  }

  function handleCargo(e) {
    setCargo(e.target.value);
  }

  // Modals
  function handleModalCrear() {
    setModalCrear(!modalCrear);
  }

  function handleModalActualizar(trabajador) {
    setModalActualizar(!modalActualizar);
    
    if (trabajador != null) {
      setElTrabajador(trabajador);
    }
  }

  function agregarTrabajador() {

    // Validar que se haya digitado en todos los campos
    if (correo == '' || contrasena == '' || nombres == '' || apellidos == '' || 
        cargo == '' || tipo == '') {
          alert('Por favor digita todos los datos.')
    } else {
      UsuariosService.postUsuarios(correo, contrasena, nombres, apellidos, 
        cargo, tipo)
        .then(datos => {
          alert('El trabajador ha sido creado con éxito');

          // Se agrega el nuevo trabajador creado
          let trabajador = {
            correo: {
              original: correo,
              nuevo: ''
            },
            contrasena: contrasena,
            nombres: nombres,
            apellidos: apellidos,
            cargo: cargo,
            tipo: tipo
          };

          let trabajadores = losTrabajadores;
          trabajadores.append(trabajador);

          setLosTrabajadores(trabajadores);

          handleModalCrear();
        })
        .catch(err => {
          alert('Ocurrió un error al intentar crear el trabajador.');
        })
    }
  }

  function editarTrabajador() {

    UsuariosService.putTrabajadores(elTrabajador.correo.original, elTrabajador.correo.nuevo, 
      elTrabajador.contrasena, elTrabajador.nombres, elTrabajador.apellidos,
      elTrabajador.cargo, elTrabajador.tipo)
      .then(datos => {
        alert('¡El trabajador ha sido actualizado con éxito!');
        
        let trabajadores = losTrabajadores;

        for (let i = 0; i < trabajadores.length; i++) {
          if (trabajadores[i].correo.original == elTrabajador.correo.original) {
            trabajadores[i] = elTrabajador;
          }
        }

        setLosTrabajadores(trabajadores);

        handleModalActualizar();
      })
      .catch(err => {
        alert('Ocurrió un error al intentar actualizar un trabajador.');
      })
  }

  useEffect(() => {
    UsuariosService.getTrabajadores()
      .then(datos => {
        setLosTrabajadores(datos.data);
      })
      .catch(err => {
        if (err) {
          alert('Ocurrió un error al intentar obtener los trabajadores');
        }
      })
  }, [])
  
  return (
    <Container className="p-0" fluid>
      <Menu />

      <Row className="w-100 justify-content-md-center mt-4 px-3">
        <Col md={2} className="text-center mt-2">
          <Button onClick={handleModalCrear}>Agregar trabajador</Button>
        </Col>

        <Col md={8} className="text-end mt-2">
            <Form.Control type="text" name="buscar-empleado" id="buscar-empleado" placeholder="Buscar empleado" />
        </Col>

        <Col md={2} className="text-center mt-2">
          <Button>Buscar</Button>
        </Col>
      </Row>

      <Container className="mt-5 p-0">
        <Row className="w-100 m-0">
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            #
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Correo
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Contraseña
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Nombres
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Apellidos
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Cargo
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Tipo
          </Col>
          <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
            Acción
          </Col>
        </Row>

        {
          losTrabajadores.map((trabajador, index) => (
            <Row className="w-100 m-0">
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {index}
              </Col>
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {trabajador.correo.original}
              </Col>
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {trabajador.contrasena}
              </Col>
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {trabajador.nombres}
              </Col>
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {trabajador.apellidos}
              </Col>
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {trabajador.cargo}
              </Col>
              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                {trabajador.tipo}
              </Col>

              <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">

                  <Button variant="warning" className="me-2" 
                    onClick={() => {
                      handleModalActualizar(trabajador)
                    }}>
                      Editar
                    </Button>

                  <Button variant="danger">Eliminar</Button>
              </Col>
            </Row>
          ))
        }
      </Container>

      {/* Modal de crear empleado */}
      <Modal show={modalCrear} >
        <Modal.Header>
          Agregar empleado
        </Modal.Header>

        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Correo*</Form.Label>
            <Form.Control type="email" id="correo" onChange={handleCorreo} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="contrasena">Contraseña*</Form.Label>
            <Form.Control type="password" name="contrasena" id="contrasena" onChange={handleContrasena} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombres">Nombres*</Form.Label>
            <Form.Control type="text" name="nombres" id="nombres" onChange={handleNombres} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="apellidos">Apellidos*</Form.Label>
            <Form.Control type="text" name="apellidos" id="apellidos" onChange={handleApellidos} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="tipo">Tipo*</Form.Label>
            <Form.Control type="number" name="tipo" id="tipo" onChange={handleTipo}  required /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="cargo">Cargo*</Form.Label>
            <Form.Select className="Form-Form.Select" name="cargo" id="cargo" onChange={handleCargo} required>
              <option defaultValue disabled>Elige una opcion</option>
              <option value='Auxiliar'>Auxiliar</option>
              <option value='Mesero'>Mesero</option>
              <option value='Repartidor'>Repartidor</option>
              <option value='Cocinero'>Cocinero</option>
            </Form.Select>
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
            <Button color="primary" onClick={agregarTrabajador}>Agregar</Button>
            <Button color="secondary" onClick={handleModalCrear}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de editar empleado */}
      <Modal show={modalActualizar}>

        <Modal.Header>
          Editar empleado
        </Modal.Header>

        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Correo</Form.Label>
            <Form.Control type="email" name="correo" id="correo" onChange={handleCorreo} value={elTrabajador.correo.nuevo} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="contrasena">Contraseña</Form.Label>
            <Form.Control type="text" name="contrasena" id="contrasena" onChange={handleContrasena} value={elTrabajador.contrasena} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Nombres</Form.Label>
            <Form.Control type="text" name="nombres" id="nombres" onChange={handleNombres} value={elTrabajador.nombres} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Apellidos</Form.Label>
            <Form.Control type="text" name="apellidos" id="apellidos" onChange={handleApellidos} value={elTrabajador.apellidos} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Cargo</Form.Label>
            <Form.Select className="Form-Form.Select" name="cargo" id="cargo" onChange={handleCargo} defaultValue={elTrabajador.cargo} >
                <option>Elige una opción</option>

                {
                  elTrabajador.cargo == "Auxiliar" ?
                    <option defaultValue value="Auxiliar">Auxiliar</option>
                  :
                    <option value="Auxiliar">Auxiliar</option>
                }

                {
                  elTrabajador.cargo == "Mesero" ?
                    <option defaultValue value="Mesero">Mesero</option>
                  :
                    <option value="Mesero">Mesero</option>
                }

                {
                  elTrabajador.cargo == 'Repartidor' ?
                    <option defaultValue value="Repartidor">Repartidor</option>
                  :
                    <option value="Repartidor">Repartidor</option>
                }

                {
                  elTrabajador.cargo == 'Cocinero' ?
                  <option defaultValue value='Cocinero'>Cocinero</option>
                :
                  <option value="Cocinero">Cocinero</option>
            }

            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Tipo:</Form.Label>
            <Form.Control type="text" id="tipo"  onChange={setTipo} value={elTrabajador.tipo}  />
          </Form.Group>

          <Modal.Footer>
              <Button color="primary" onClick={editarTrabajador}>Aceptar</Button>
              <Button color="secondary" onClick={() => handleModalActualizar(null)}>Cerrar</Button>
          </Modal.Footer>

        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default TrabajadoresGerentes;
