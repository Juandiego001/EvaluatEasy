import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';

const Login = () => (
  <div className={styles.Login}>

    <div className={styles.ImagenLogo}>
      <img src="logo-transparent.png" />
    </div>

    <div className={styles.ContenedorFormularioInciarSesion}>
        <form>
          <input name="correo" id="correo" placeholder="Correo electrónico" type="text" />
          <input name="contrasena" id="contrasena" type="password" placeholder="************" />

          <div>
            <button>Iniciar sesión</button>
            <button>Olvidé mi contraseña</button>
          </div>
        </form>
    </div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
