import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EstadoTrabajadoresGerentes.module.css';
import Menu from '../../components/Menu/Menu';

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Componentes de React-Bootstrap
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EstadoTrabajadoresGerentes = (props) => {

  const location = useLocation();
  const [losTrabajadores, setLosTrabajadores] = useState([]);
  const [showModalErrorObtener, setShowModalErrorObtener] = useState(false);
  const [showModalNoHay, setShowModalNoHay] = useState(false);

  function handleShowModalErrorObtener() {
    setShowModalErrorObtener(!showModalErrorObtener);
  }

  function handleShowModalNoHay() {
    setShowModalNoHay(!showModalNoHay);
  }

  const effect = useEffect(() => {
    UsuariosService.getTrabajadores()
      .then(datos => {
        if (datos.data.length > 0) {
          setLosTrabajadores(datos.data);
        } else {
          setShowModalNoHay(true);
        }
      })
      .catch(err => {
        console.log(err);
        setShowModalErrorObtener(true);
      })
  }, []);

  function actualizarEstado(correo, estado) {
    UsuariosService.putEstadoTrabajadores(correo, estado)
      .then(datos => {
        console.log(datos);
        alert('¡Los datos del estado han sido actualizados con éxito!');
        effect();
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar actualizar el estado del trabajador.');
      })
  }

  return (
    <Container className="ps-0 pe-0" fluid>
      {/* Aquí debe insertarse el Menu */}
      {/* El menu lo tengo en el computador personal (Cobo). A penas pueda hacer git push pongo el menú */}
      <Menu />

      <Container fluid>
        <Row className="gx-3 gy-4">
          {
            losTrabajadores.map((trabajador, index) => {

              return (
                <Col className="col-4">
                    <Row className="justify-content-center">
                      <FontAwesomeIcon icon={faUser} className="display-1 px-0 py-3"/>
                    </Row>

                    <Row className="justify-content-center">
                      <p className="text-center">
                        {trabajador.nombres}{' '}{trabajador.apellidos}
                      </p>
                    </Row>

                    <Row className="py-3 gx-1">
                      <Col>
                        <div className={styles.Estado1 + " " + "rounded-5"}>
                          <span className={trabajador.estado == 1 ? styles.visibleTrue + " " + "fs-3 fw-bold" : styles.visibleFalse}>1</span>
                        </div>
                      </Col>

                      <Col>
                        <div className={styles.Estado2 + " " + "rounded-5"}>
                          <span className={trabajador.estado == 2 ? styles.visibleTrue + " " + "fs-3 fw-bold" : styles.visibleFalse}>2</span>
                        </div>
                      </Col>
                  
                      <Col>
                        <div className={styles.Estado3 + " " + "rounded-5"}>
                          <span className={trabajador.estado == 3 ? styles.visibleTrue + " " + "fs-3 fw-bold" : styles.visibleFalse}>3</span>
                        </div>
                      </Col>

                      <Col>
                        <div className={styles.Estado4 + " " + "rounded-5"}>
                          <span className={trabajador.estado == 4 ? styles.visibleTrue + " " + "fs-3 fw-bold" : styles.visibleFalse}>4</span>
                        </div>
                      </Col>

                      <Col>
                        <div className={styles.Estado5 + " " + "rounded-5"}>
                          <span className={trabajador.estado == 5 ? styles.visibleTrue + " " + "fs-3 fw-bold w-50" : styles.visibleFalse}>5</span>
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-center">
                      {
                        trabajador.estado == 1 ? 
                          <Button as="input" type="button" className="text-capitalize w-50" value="Asignar evaluación"  onClick={() => actualizarEstado(trabajador.correo.original, 2)} />
                        : 
                        
                        trabajador.estado == 2 ?
                          <span className="text-break bg-primary text-light w-50 text-center rounded-1">
                            Evaluación asignada
                            </span>
                        :
                        
                        trabajador.estado == 3 ?
                          <Button as="input" type="button" className="text-capitalize w-50" value="Asignar coevaluación"  onClick={() => actualizarEstado(trabajador.correo.original, 4)}/>
                        :
                        
                        trabajador.estado == 4 ?
                          <span className="text-break bg-primary text-light w-50 text-center rounded-1">Coevaluación asignada</span>
                        :

                        trabajador.estado == 5 ?  
                          <span className="text-break bg-primary text-light w-50 text-center rounded-1">Proceso completado</span>
                        :
                        ''
                      }
                    </Row>
                </Col>
              )
            })
          }
        </Row>   
      </Container>

      {/* <FontAwesomeIcon icon={faSquarePollVertical} /> */}
      
      {/* Modals */}
      {/* Modal para mostrar que ocurrió un error al intentar obtener los datos para ser actualizados */}
      <Modal show={showModalErrorObtener} onHide={handleShowModalErrorObtener}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Ocurrió un error al intentar obtener los datos del estado de los trabajadores.</p>
          </Modal.Body>
      </Modal>

      {/* Modal para mostrar que no hay usuarios trabajadores registrados en la base de datos */}
      <Modal show={showModalNoHay} onHide={handleShowModalNoHay}>
          <Modal.Header closeButton>
            <Modal.Title>Importante</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>No se encontraron trabajadores en la base de datos.</p>
          </Modal.Body>
      </Modal>

    </Container>
  )};

EstadoTrabajadoresGerentes.propTypes = {};

EstadoTrabajadoresGerentes.defaultProps = {};

export default EstadoTrabajadoresGerentes;
