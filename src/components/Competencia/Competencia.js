import React from 'react';
import PropTypes from 'prop-types';
import styles from './Competencia.module.css';

// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Competencia = (props) => {



  return (
    <Container fluid>
        <Row>
          <h3 className="text-dark py-3 text-center w-100">Competencia: <u>{props.nombre}</u></h3>
        </Row>

        <Row>
          <p className="text-justify fs-4">
            {
              props.descripcion
            }
          </p>
        </Row>

        <Row className="gx-3">
          <Row className="mb-3">
            {/* Valoración */}
            <Col className="d-flex col-2 text-center justify-content-center">
              <div className={styles.EstadoA + " " + "w-25 rounded-5"}>
                <span className="fs-3 fw-bold w-50">A</span>
              </div>
            </Col>

            {/* Descripción de lo que dice la letra */}
            <Col className="col-10 fs-4">
              {props.letraA}
            </Col>
          </Row>
            
          <Row className="mb-3">
            {/* Valoración */}
            <Col className="d-flex col-2 text-center justify-content-center">
              <div className={styles.EstadoB + " " + "w-25 rounded-5"}>
                <span className="fs-3 fw-bold w-50">B</span>
              </div>
            </Col>

            {/* Descripción de lo que dice la letra */}
            <Col className="col-10 fs-4">
              {props.letraB}
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Valoración */}
            <Col className="d-flex col-2 text-center justify-content-center">
              <div className={styles.EstadoC + " " + "w-25 rounded-5"}>
                <span className="fs-3 fw-bold w-50">C</span>
              </div>
            </Col>

            {/* Descripción de lo que dice la letra */}
            <Col className="col-10 fs-4">
              {props.letraC}
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Valoración */}
            <Col className="d-flex col-2 text-center justify-content-center">
              <div className={styles.EstadoD + " " + "w-25 rounded-5"}>
                <span className="fs-3 fw-bold w-50">D</span>
              </div>
            </Col>

            {/* Descripción de lo que dice la letra */}
            <Col className="col-10 fs-4">
              {props.letraD}
            </Col>
          </Row>
        </Row>

        <Row className="my-3">
          <Col className="text-center">
            <Button variant="primary" as="input" type="button" className="text-capitalize" value="Determinar mi puntuación" onClick={() => props.puntuacionTrabajador(props.idCompetencia, props.quien)}/>
          </Col>
        </Row>
    </Container>
  )};

Competencia.propTypes = {
  idCompetencia: PropTypes.number,
  nombre: PropTypes.string,
  descripcion: PropTypes.string,
  letraA: PropTypes.string,
  letraB: PropTypes.string,
  letraC: PropTypes.string,
  letraD: PropTypes.string,
  letraTrabajador: PropTypes.string,
  letraGerente: PropTypes.string,
  indice: PropTypes.number,
  puntuacionTrabajador: PropTypes.func,
  quien: PropTypes.number
};

Competencia.defaultProps = {
  idCompetencia: 1,
  nombre: '',
  descripcion: '',
  letraA: '',
  letraB: '',
  letraC: '',
  letraD: '',
  letraTrabajador: 'A',
  letraGerente: 'A',
  indice: 0,
  quien: 2
};

export default Competencia;
