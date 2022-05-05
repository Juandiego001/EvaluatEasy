import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsideNav.module.css';

const AsideNav = (props) => {



  return (
    <div className={styles.AsideNav}>
      <h2>
        EvaluatEasy
      </h2>
      <ul>
        <li><a>Inicio</a></li>
        <li><a>Empleados</a></li>
        <li><a>Evaluación</a></li>
        <li><a>Coevaluación</a></li>
      </ul>
      <h4>Developed by Paralex</h4>
    </div>
  )};

AsideNav.propTypes = {};

AsideNav.defaultProps = {};

export default AsideNav;
