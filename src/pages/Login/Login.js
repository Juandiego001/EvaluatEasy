import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService.js';

// Para cookies
import { useCookies } from 'react-cookie';

const Login = (props) => {

  const [cookies, setCookies] = useCookies(['nombres', 'apellidos', 'tipo']);
  const[correo, setCorreo] = useState();
  const[contrasena, setContrasena] = useState();

  function handleCorreo(e) {
    setCorreo(e.target.value);
  }

  function handleContrasena(e) {
    setContrasena(e.target.value);
  }

  const navigate = useNavigate();
  function iniciarSesion(e) {

    // Evita que se recargue la página
    e.preventDefault();

    UsuariosService.logIn(correo, contrasena)
      .then((datos) => {

        if (datos.data.login) {
          let nombres = datos.data.nombres;
          let apellidos = datos.data.apellidos;
          let tipo = datos.data.tipo;
          let estado = datos.data.estado;
          
          setCookies('correo', correo, {
            path: '/'
          });

          setCookies('nombres', nombres, {
            path: '/'
          });

          setCookies('apellidos', apellidos, {
            path: '/'
          });

          setCookies('tipo', tipo, {
            path: '/'
          });

          setCookies('estado', estado, {
            path: '/'
          });

          switch(tipo) {
            case 1:
              navigate('/home-gerentes');
              break;

              case 2:
                navigate('/home-auxiliar');
                break;
              
              case 3:
                navigate('/home-trabajadores');
                break;
          }

        } else {
          alert('Correo o contraseña incorrectos.');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Ocurrió un error al intentar iniciar sesión.');
      })
  }
  
  return (
  <div className={styles.Login}>

    <div className={styles.ImagenLogo}>
      <img src="logo-transparent.png" />
    </div>

    <div className={styles.ContenedorFormularioInciarSesion}>
        <form>
          <input name="correo" id="correo" placeholder="Correo electrónico" type="text" autoComplete="off" onChange={handleCorreo} />
          <input name="contrasena" id="contrasena" type="password" placeholder="************" onChange={handleContrasena} />

          <div>
            <button onClick={iniciarSesion}>Iniciar sesión</button>
            <button>Olvidé mi contraseña</button>
          </div>
        </form>
    </div>
  </div>
)};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
