import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CompetenciasTrabajadores.module.css';
import Menu from '../../components/Menu/Menu';
import Competencia from '../../components/Competencia/Competencia';

// React-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

// Cookies
import { useCookies } from 'react-cookie';

// Services
import CompetenciasService from '../../services/CompetenciasService/CompetenciasService';
import ValoracionesService from '../../services/ValoracionesService/ValoracionesService' ;
import ValoracionesFinalesService from '../../services/ValoracionesFinalesService/ValoracionesFinalesService';
import { Navigate } from 'react-router-dom';

const CompetenciasTrabajadores = (props) => {

  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(['correo', 'nombres', 'apellidos', 'tipo', 'estado']);
  const [indiceCompetencia, setIndiceCompetencia] = useState([0]);
  const [lasCompetencias, setLasCompetencias] = useState([{
    nombre: '',
    descripcion: '',
    letraA: '',
    letraB: '',
    letraC: '',
    letraD: ''
  }]);
  const [lasValoraciones, setLasValoraciones] = useState([]);
  const [lasValoracionesFinales, setLasValoracionesFinales] = useState();
  
  function siguienteCompetencia() {
    setIndiceCompetencia(indiceCompetencia + 1);
  }

  function anteriorCompetencia() {
    setIndiceCompetencia(indiceCompetencia - 1);
  }

  useEffect(() => {
    CompetenciasService.getCompetencias()
      .then(datos => {
        let auxValoraciones = [];
        let auxValoracionesFinales = [];

        // Competencias
        datos.data.map((competencia, index) => {
          let idCompetencia = competencia.id;

          // Valoraciones
          let obtenerValoraciones = ValoracionesService.getValoraciones(idCompetencia);
          obtenerValoraciones
            .then(datos1 => {
              console.log(datos1);
              auxValoraciones.push(datos1.data);
            })
            .catch(err1 => {
              console.log(err1);
              alert('Ocurrió un error al intentar obtener las valoraciones finales.');
            })

          // Valoraciones finales
          let obtenerValoracionesFinales = ValoracionesFinalesService.getValoracionesFinales(idCompetencia);
          obtenerValoracionesFinales
            .then(datos1 => {
              console.log(datos1);
              auxValoracionesFinales.push(datos1.data);
            })
            .catch(err1 => {
              console.log(err1);
              alert('Ocurrió un error al intentar obtener las valoraciones finales.');
            })
        })
        
        setLasValoraciones(auxValoraciones);
        setLasValoracionesFinales(auxValoracionesFinales);
        setLasCompetencias(datos.data);
        setIndiceCompetencia([0, datos.data.length])
      })
      .catch(err => {
        console.log(err);
        alert('Ocurrió un error al intentar obtener las competencias.');
      })

  }, []);

  function puntuacionTrabajador(idCompetencia, quien) {
    let puntuacion =  window.prompt("Ingresé el valor que usted considera merecido (A-D)");

    ValoracionesService.postValoraciones(idCompetencia, quien, puntuacion)
      .then(datos => {
        console.log(datos);
        alert('¡Se ha registrado la puntuación con éxito! Si es la última competencia puede finalizar');
      })
  }

  function finalizar() {
    navigate('/home-trabajadores');
  }

  return (
    <Container className="px-0" fluid>
      <Menu />

      <Container fluid>
        {
          <Competencia 
            idCompetencia={lasCompetencias[indiceCompetencia[0]].id}
            nombre={lasCompetencias[indiceCompetencia[0]].nombre} 
            descripcion={lasCompetencias[indiceCompetencia[0]].descripcion} 
            letraA={lasCompetencias[indiceCompetencia[0]].letraA} 
            letraB={lasCompetencias[indiceCompetencia[0]].letraB}
            letraC={lasCompetencias[indiceCompetencia[0]].letraC} 
            letraD={lasCompetencias[indiceCompetencia[0]].letraD}
            indice={indiceCompetencia}
            puntuacionTrabajador={puntuacionTrabajador}
            quien={2}
          />
        }

        <Row className="w-100">

          {
            indiceCompetencia[0] + 1 != indiceCompetencia[1] ?
              <Col className="text-end">
                <Button variant="primary" as="input" type="button" className="text-capitalize w-50 " value="Continuar" />
              </Col>
            :
              ''
          }

          {
            indiceCompetencia[0] != 0 ?
              <Col className="text-start">
                <Button variant="success" as="input" type="button" className="text-capitalize w-50" value="Regresar" />
              </Col>
            :
              ""
          }

          {
            indiceCompetencia[0] + 1 == indiceCompetencia[1] ?
              <Col className="text-center">
                  <Button variant="primary" as="input" type="button" className="text-capitalize w-50" value="Finalizar" onClick={finalizar} />
              </Col>
            :
              ''
          }

        </Row>
      </Container>
    </Container>
  )};

CompetenciasTrabajadores.propTypes = {};

CompetenciasTrabajadores.defaultProps = {};

export default CompetenciasTrabajadores;
