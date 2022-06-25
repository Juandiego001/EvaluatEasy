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
  const [cargo, setCargo] = useState('Auxiliar');

  // Para mostrar la búsqueda
  const [busqueda, setBusqueda] = useState('');
  const [trabajadorBuscado, setTrabajadorBuscado] = useState(
    {
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
  
  function handleBusqueda(e) {
    setBusqueda(e.target.value);
  }  

  // Funciones handle para crear
  function handleCorreo(e) {
    setCorreo(e.target.value);
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

  // Funciones handle para actualizar
  function handleCorreoActualizar(e) {
    let trabajador = {
      ...elTrabajador,
      correo: {
        original: elTrabajador.correo.original,
        nuevo: e.target.value
      }
    }
    setElTrabajador(trabajador);
  }

  function handleContrasenaActualizar(e) {
    let trabajador = {
      ...elTrabajador,
      contrasena: e.target.value
    }
    setElTrabajador(trabajador);
  }

  function handleNombresActualizar(e) {
    let trabajador = {
      ...elTrabajador,
      nombres: e.target.value
    }
    setElTrabajador(trabajador);
  }

  function handleApellidosActualizar(e) {
    let trabajador = {
      ...elTrabajador,
      apellidos: e.target.value
    }
    setElTrabajador(trabajador);
  }

  function handleTipoActualizar(e) {
    let trabajador = {
      ...elTrabajador,
      tipo: e.target.value
    }
    setElTrabajador(trabajador);
  }

  function handleCargoActualizar(e) {
    let trabajador = {
      ...elTrabajador,
      cargo: e.target.value
    }
    setElTrabajador(trabajador);
  }

  // Modals
  function handleModalCrear() {
    setModalCrear(!modalCrear);
  }

  function handleModalActualizar(trabajador) {
    setModalActualizar(!modalActualizar);
    
    if (trabajador != null) {
      alert(trabajador);
      console.log(trabajador);
      setElTrabajador(trabajador);
    }
  }

  function obtenerTrabajadores() {
    UsuariosService.getTrabajadores()
      .then(datos => {
        setLosTrabajadores(datos.data);
      })
      .catch(err => {
        alert('Ocurrió un erroral intentar obtener nuevamente los trabajadores.');
        console.log(err);
      })
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
          alert('¡El trabajador ha sido creado con éxito!');
          
          // Obtener nuevamente los trabajadores
          obtenerTrabajadores();
          setBusqueda('');
          // Para volver a colocar como null el trabajador buscado
          resetTrabajadorBuscado();


          // Para cerrar el modal
          setModalCrear(false);
        })
        .catch(err => {
          alert('Ocurrió un error al intentar crear el trabajador.');
          console.log(err);
        })
    }
  }

  function editarTrabajador() {
    UsuariosService.putTrabajadores(elTrabajador.correo.original, elTrabajador.correo.nuevo, 
      elTrabajador.contrasena, elTrabajador.nombres, elTrabajador.apellidos,
      elTrabajador.cargo, elTrabajador.tipo)
      .then(datos => {
        alert('¡El trabajador ha sido actualizado con éxito!');

        // Obtener nuevamente los trabajadores
        obtenerTrabajadores();
        setBusqueda('');
        // Para volver a colocar como null el trabajador buscado
        resetTrabajadorBuscado();

        setModalActualizar(false);
      })
      .catch(err => {
        alert('Ocurrió un error al intentar actualizar un trabajador.');
        console.log(err);
      })
  }

  function eliminarTrabajador(correo) {
    UsuariosService.deleteUsuarios(correo)
      .then(datos => {
        alert('¡El trabajador ha sido eliminado con éxito!');
        obtenerTrabajadores();
        setBusqueda('');

        // Para volver a colocar como null el trabajador buscado
        resetTrabajadorBuscado();
      })
      .catch(err => {
        alert('Ocurrió un error al intentar eliminar el trabajador.');
        console.log(err);
      })

  }

  function buscarTrabajador() {
    UsuariosService.getTrabajador(busqueda)
      .then(datos => {

        if (datos.data.length == 0) {
          alert('No se encontró ningun trabajador con ese correo');
        } else {
          let trabajador = datos.data[0];
          
          trabajador.correo = {
            original: trabajador.correo,
            nuevo: trabajador.correo
          }

          setTrabajadorBuscado(trabajador);
        }
      })
      .catch(err => {
        alert('Ocurrió un error al intentar obtener el trabajador buscado.');
        console.log(err);
      })
  }

  function resetTrabajadorBuscado() {
    let trabajador = {
      correo: {
        original: '',
        nuevo: ''
      },
      contrasena: '',
      nombres: '',
      apellidos: '',
      cargo: '',
      tipo: ''
    };

    setTrabajadorBuscado(trabajador);
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
            <Form.Control type="text" name="buscar-empleado" id="buscar-empleado" placeholder="Digite el correo del empleado" value={busqueda} onChange={handleBusqueda} />
        </Col>

        <Col md={2} className="text-center mt-2">
          <Button onClick={buscarTrabajador}>Buscar</Button>
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
          busqueda == '' ?
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

                  <Button variant="danger"
                    onClick={() => {
                      eliminarTrabajador(trabajador.correo.original)
                    }}>Eliminar</Button>
                </Col>
              </Row>
            ))
          :
            trabajadorBuscado.correo.original != '' ?
              <Row className="w-100 m-0">
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                </Col>
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                  {trabajadorBuscado.correo.original}
                </Col>
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                  {trabajadorBuscado.contrasena}
                </Col>
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                  {trabajadorBuscado.nombres}
                </Col>
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                  {trabajadorBuscado.apellidos}
                </Col>
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                  {trabajadorBuscado.cargo}
                </Col>
                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                  {trabajadorBuscado.tipo}
                </Col>

                <Col className="d-flex justify-content-center align-items-center text-center border border-secondary py-3">
                <Button variant="warning" className="me-2" 
                    onClick={() => {
                      handleModalActualizar(trabajadorBuscado)
                    }}>
                      Editar
                    </Button>

                  <Button variant="danger"
                    onClick={() => {
                      eliminarTrabajador(trabajadorBuscado.correo.original)
                    }}>Eliminar</Button>
                </Col>
              </Row>
            :
              ''
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
            <Form.Control type="email" name="correo" id="correo" onChange={handleCorreoActualizar} value={elTrabajador.correo.nuevo} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="contrasena">Contraseña</Form.Label>
            <Form.Control type="text" name="contrasena" id="contrasena" onChange={handleContrasenaActualizar} value={elTrabajador.contrasena} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Nombres</Form.Label>
            <Form.Control type="text" name="nombres" id="nombres" onChange={handleNombresActualizar} value={elTrabajador.nombres} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Apellidos</Form.Label>
            <Form.Control type="text" name="apellidos" id="apellidos" onChange={handleApellidosActualizar} value={elTrabajador.apellidos} /> 
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="correo">Cargo</Form.Label>
            <Form.Select className="Form-Form.Select" name="cargo" id="cargo" onChange={handleCargoActualizar} defaultValue={elTrabajador.cargo} >
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
            <Form.Control type="text" id="tipo"  onChange={handleTipoActualizar} value={elTrabajador.tipo}  />
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
