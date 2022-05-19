import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomeTrabajadores.module.css';
import Menu from '../../components/Menu/Menu';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Cookies
import { useCookies } from 'react-cookie';

const HomeTrabajadores = (props) => {

  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(['correo', 'nombres', 'apellidos']);

  function irEvaluacion() {
    navigate('/evaluaciones-trabajadores');
  }

  function irConfiguracion() {
    navigate('/configuracion-trabajadores');
  }

  return (
    <Container className="px-0" fluid>
      <Menu />

      <Container fluid>
        <Row>
          <Col className="text-center col-md-6 p-5">
            <Button variant="outline-success" size="lg" className="text-capitalize" onClick={irEvaluacion}>
              {/* Contenedor para mostrar la opción de dirigirse a las evaluaciones asignadas */}
              <div>
                <FontAwesomeIcon className="display-1" icon={faMagnifyingGlassChart} />
                <h4>Evaluación</h4>
              </div>
            </Button>
          </Col>

          <Col className="text-center col-md-6 p-5">
            <Button variant="outline-primary" size="lg" className="text-capitalize">
              {/* Contenedor para mostrar la opción de dirigirse a la configuración de sus datos */}
              <div>
                <FontAwesomeIcon className="display-1" icon={faSquarePollVertical} />
                <h4>Configuración</h4>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )};

HomeTrabajadores.propTypes = {};

HomeTrabajadores.defaultProps = {};

export default HomeTrabajadores;
