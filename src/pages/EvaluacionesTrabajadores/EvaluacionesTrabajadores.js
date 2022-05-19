import React from 'react';
import PropTypes from 'prop-types';
import styles from './EvaluacionesTrabajadores.module.css';
import Menu from '../../components/Menu/Menu';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Cookies
import { useCookies } from 'react-cookie';


const EvaluacionesTrabajadores = (props) => {

  const [cookies, setCookies] = useCookies(['correo', 'nombres', 'apellidos']);

  return (
    <Container className="p-0" fluid>
      <Menu />

      <Container className="alig-items-center" fluid>
        {/* Recordar que las escalas de evaluación son diferentes a los estados de los empleados */}
        {/* Es decir, las escalas de evaluación van desde A hasta D (4 valores) */}
        {/* Mientras que los estados son 5, donde el 5 es cuando se ha finalizado todo el proceso */}
        <Row>
          <Col className="text-center py-4 text-secondary">
            <h2>
              <u>
                Escala de evaluación
              </u>
            </h2>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-3 d-flex justify-content-center align-items-center">
            <div className={styles.EscalaA + " " + "fs-2 rounded-circle px-4 py-3"}>
              <span>A</span>
            </div>
          </Col>
          <Col className="col-9 d-flex align-items-center">
            <p className="text-break fs-5 m-0">
              <b>Deficiente. </b>
              El comportamiento está presente con bajo nivel de frecuencia en algunas de las actividades que realiza. 
              Cumple imparcialmente o no cumple con el nivel esperado para el cargo. 
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-3 d-flex justify-content-center align-items-center">
            <div className={styles.EscalaB + " " + "fs-2 rounded-circle px-4 py-3"}>
              <span>B</span>
            </div>
          </Col>
          <Col className="col-9 d-flex justify-content-center align-items-center">
            <p className="text-break fs-5 m-0">
              <b>Regular. </b>
              El comportamiento se evidencia ocasionalmente en las actividades realizadas. 
              Presenta deficiencias para alcanzar los resultados. 
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-3 d-flex justify-content-center align-items-center">
            <div className={styles.EscalaC + " " + "fs-2 rounded-circle px-4 py-3"}>
              <span>C</span>
            </div>
          </Col>
          <Col className="col-9 d-flex justify-content-center align-items-center">
            <p className="text-break fs-5 m-0">
              <b>Bueno. </b>
              El comportamiento se evidencia de manera constante en las actividades realizadas. 
              Cumple con las expectativas del nivel esperado. 
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="col-3 d-flex justify-content-center align-items-center">
            <div className={styles.EscalaD + " " + "fs-2 rounded-circle px-4 py-3"}>
              <span>D</span>
            </div>
          </Col>
          <Col className="col-9 d-flex justify-content-center align-items-center">
            <p className="text-break fs-5 m-0">
              <b>Excelente. </b>
              El comportamiento se evidencia de forma sobresaliente en las actividades realizadas. 
              Excede las expectativas del nivel esperado.
            </p>
          </Col>
        </Row>
      </Container>

      <Row className="w-100 justify-content-center m-0">
        <Button as="input" value="Iniciar evaluación" className="text-capitalize w-25"/>
      </Row>

      <Row className="w-100 justify-content-center m-0 text-center bg-secondary">
        <h4 className="text-light">Aún no se te ha asignado una evaluación o coevaluación</h4>
      </Row>

    </Container>
  )
};

EvaluacionesTrabajadores.propTypes = {};

EvaluacionesTrabajadores.defaultProps = {};

export default EvaluacionesTrabajadores;
