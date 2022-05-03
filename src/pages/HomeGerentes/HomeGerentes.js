import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomeGerentes.module.css';
import AsideNav from '../../components/AsideNav/AsideNav';


const HomeGerentes = () => (
  <div className={styles.HomeGerentes}>
    <AsideNav />

    <div className={styles.ContenedorPagina}>

    </div>
  </div>
);

HomeGerentes.propTypes = {};

HomeGerentes.defaultProps = {};

export default HomeGerentes;
