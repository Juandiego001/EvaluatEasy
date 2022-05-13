import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomeOperarios.module.css';

// Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const HomeOperarios = (props) => {

  return (
    <div className={styles.HomeOperarios}>

      {/* Contenedor para mostrar la opción de dirigirse a las evaluaciones asignadas */}
      <div>
        <FontAwesomeIcon icon={faSquarePollVertical} />
        <h1>Evaluaciones</h1>
      </div>

      {/* Contenedor para mostrar la opción de dirigirse a la configuración de sus datos */}
      <div>
        <FontAwesomeIcon icon={faSquarePollVertical} />
        <h1>Configuración</h1>
      </div>
    </div>
  )};

HomeOperarios.propTypes = {};

HomeOperarios.defaultProps = {};

export default HomeOperarios;
