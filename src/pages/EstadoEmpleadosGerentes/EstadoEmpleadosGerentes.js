import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './EstadoEmpleadosGerentes.module.css';
import EstadoEmpleadosGerentesService from '../../services/EstadoEmpleadosGerentesService/EstadoEmpleadosGerentesService';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

const EstadoEmpleadosGerentes = (props) => {

  const location = useLocation();
  const [losEmpleados, setLosEmpleados] = useState([]);


  useEffect(() => {
    EstadoEmpleadosGerentesService.getEmpleados()
  });

  return (
    <div className={styles.EstadoEmpleadosGerentes}>
      {/* Aquí debe insertarse el Menu */}
      {/* El menu lo tengo en el computador personal (Cobo). A penas pueda hacer git push pongo el menú */}
      

      <FontAwesomeIcon icon={faSquarePollVertical} />

    </div>
  )};

EstadoEmpleadosGerentes.propTypes = {};

EstadoEmpleadosGerentes.defaultProps = {};

export default EstadoEmpleadosGerentes;
