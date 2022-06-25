import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService.js';

// Para cookies
import { useCookies } from 'react-cookie';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  const [cookies, setCookies] = useCookies(['nombres', 'apellidos', 'tipo']);
  const[correo, setCorreo] = useState();
  const[contrasena, setContrasena] = useState();

  function handleCorreo(e) {
    setCorreo(e.target.value);
  }

  function handleContrasena(e) {
    setContrasena(e.target.value);
  }

  const navigate = useNavigate();
  function iniciarSesion(e) {

    // Evita que se recargue la página
    e.preventDefault();

    UsuariosService.logIn(correo, contrasena)
      .then((datos) => {

        if (datos.data.login) {
          let nombres = datos.data.nombres;
          let apellidos = datos.data.apellidos;
          let tipo = datos.data.tipo;
          let estado = datos.data.estado;
          
          setCookies('correo', correo, {
            path: '/'
          });

          setCookies('nombres', nombres, {
            path: '/'
          });

          setCookies('apellidos', apellidos, {
            path: '/'
          });

          setCookies('tipo', tipo, {
            path: '/'
          });

          setCookies('estado', estado, {
            path: '/'
          });

          switch(tipo) {
            case 1:
              navigate('/home-gerentes');
              break;

              case 2:
                navigate('/home-auxiliar');
                break;
              
              case 3:
                navigate('/home-trabajadores');
                break;
          }

        } else {
          alert('Correo o contraseña incorrectos.');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Ocurrió un error al intentar iniciar sesión.');
      })
  }
  
  return (
    <Container className="bg-light p-0 vh-100" fluid>
      <Container className="d-flex justify-content-center align-items-center w-50">
        <img className="w-50 bg-secondary p-5" src="logo-transparent.png" />
      </Container>

      <Container>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label for="correo" className="text-dark">Correo</Form.Label>
              <Form.Control className="mb-3" name="correo" id="correo" placeholder="Correo electrónico" type="text" autoComplete="off" onChange={handleCorreo} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label for="contrasena" className="text-dark">Contraseña</Form.Label>
              <Form.Control name="contrasena" id="contrasena" type="password" onChange={handleContrasena} placeholder="Contraseña" />
            </Form.Group>

            <Row className="w-100">
              <Col>
                <Button className="w-100" variant="primary" onClick={iniciarSesion}>Iniciar sesión</Button>
              </Col>

              <Col>
                <Button className="w-100" variant="light">Olvidé mi contraseña</Button>
              </Col>
            </Row>
          </Form>
      </Container>
    </Container>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
