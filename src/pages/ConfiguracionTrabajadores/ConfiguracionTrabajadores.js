import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ConfiguracionTrabajadores.module.css';

// Componentes de React-Bootstrap
import Menu from '../../components/Menu/Menu';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService';

// Para las cookies
import { useCookies } from 'react-cookie';

const ConfiguracionTrabajadores = (props) => {

  // React router dom
  const navigate = useNavigate();

  const [cookies, setCookies] = useCookies(['correo', 'nombres', 'apellidos', 'tipo']);
  const [nombres, setNombres] = useState('Angela María');
  const [apellidos, setApellidos] = useState('Madriñan Cabal');
  const [correo, setCorreo] = useState('angela@hotmail.com');
  const [contrasena, setContrasena] = useState('12345');

  // Estado para mostrar alertas de React-Bootstrap
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const [showModalExito, setShowModalExito] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  function handleShowModalError() {
    setShowModalError(!showModalError);
  }

  function handleShowModalExito() {
    setShowModalExito(!showModalExito);
  }


  function handleNombres(e) {
    setNombres(e.target.value);
  }

  function handleApellidos(e) {
    setApellidos(e.target.value);
  }

  function handleCorreo(e) {
    setCorreo(e.target.value);
  }

  function handleContrasena(e) {
    setContrasena(e.target.value);
  }

  useEffect(() => {
    // El usuario es redirigido al inicio ya que no ha iniciado sesión
    if (cookies.correo == undefined) {
      navigate("/");
    }

    let correo = cookies.correo;
    setNombres(cookies.nombres);
    setApellidos(cookies.apellidos);
    setCorreo(correo);    

    UsuariosService.getContrasena(correo)
      .then(datos => {
        if (datos.data.length > 0) setContrasena(datos.data[0].contrasena);
      })
      .catch(err => {
        console.log(err);
        setShowModal(true);
      })

  }, []);

  function putUsuarios() {
    let correoActual = cookies.correo;
    UsuariosService.putUsuarios(correoActual, correo, contrasena, nombres, apellidos)
      .then(datos => {
        setCookies('correo', correo, { path: '/' });
        setCookies('nombres', nombres, { path: '/' });
        setCookies('apellidos', apellidos, { path: '/' });
        setShowModalExito(true);
      })
      .catch(err => {
        setShowModalError(true);
      })
  }


  return (
    <Container className="vh-100 ps-0 pe-0" fluid>
      <Menu />

      <Container className="vh-75" fluid>
        <Row>
          <h2 className="container w-100 text-center py-3 text-secondary text-underline">
            <u>
              Datos personales
            </u>
          </h2>
        </Row>

        <Row className="justify-content-center mb-3">
          <Form className="w-75">
            <Form.Group className="mb-2">
              <Form.Label className="h4">Nombre/s</Form.Label>
              <Form.Control className="py-3" type="text" placeholder="Angela María" value={nombres}  onChange={handleNombres} />
            </Form.Group>

            <Form.Group>
              <Form.Label className="h4">Apellido/s</Form.Label>
              <Form.Control className="py-3" type="text" placeholder="Madriñan Cabal" value={apellidos} onChange={handleApellidos} />
            </Form.Group>
          </Form>
        </Row>

        <Row className="">
          <h2 className="container w-100 text-center text-secondary">
            <u>
              Cuenta
            </u>
          </h2>
        </Row>

        <Row className="justify-content-center">
          <Form className="w-75">
            <Form.Group className="mb-2">
              <Form.Label className="h4">Correo</Form.Label>
              <Form.Control className="py-3" type="email" placeholder="angela@hotmail.com" value={correo} onChange={handleCorreo} />
            </Form.Group>

            <Form.Group>
              <Form.Label className="h4">Contraseña</Form.Label>
              <Form.Control className="py-3" type="text" placeholder="123456" value={contrasena} onChange={handleContrasena}/>
            </Form.Group>
          </Form>
        </Row>

        <Row className="mt-5 justify-content-center">          
            <Button as="input" type="button" className="w-75 text-capitalize text-center" value="Actualizar" variant="primary" onClick={putUsuarios}/>
        </Row>
      </Container>

        {/* Modals */}
        {/* Modal para mostrar que ocurrió un error al intentar obtener los datos para ser actualizados */}
        <Modal show={showModal} onHide={handleShowModal}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Ocurrió un error al intentar obtener los datos para ser actualizados.</p>
            </Modal.Body>
        </Modal>

        {/* Modal para mostrar que ocurrió un error al intentar actualizar los datos */}
        <Modal show={showModalError} onHide={handleShowModalError}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Ocurrió un error al intentar actualizar los datos.</p>
            </Modal.Body>
        </Modal>

        {/* Modal para informar que los datos han sido actualizados con éxito */}
        <Modal show={showModalExito} onHide={handleShowModalExito}>
            <Modal.Header closeButton>
              <Modal.Title>Éxito</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>¡Los datos han sido actualizados con éxito!</p>
            </Modal.Body>
        </Modal>
    </Container>
  )};

ConfiguracionTrabajadores.propTypes = {};

ConfiguracionTrabajadores.defaultProps = {};

export default ConfiguracionTrabajadores;
