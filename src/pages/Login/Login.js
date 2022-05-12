import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

// Services
import UsuariosService from '../../services/UsuariosService/UsuariosService.js';

const Login = (props) => {

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

          switch(tipo) {
            case 1:
              navigate('/home-gerentes', { 
                state: 
                  { 
                    nombres: nombres,
                    apellidos: apellidos
                  }
                });
              break;

              case 2:
                navigate('/home-auxiliar', { 
                  state: 
                    { 
                      nombres: nombres,
                      apellidos: apellidos
                    }
                  });
                break;
              
              case 3:
                navigate('/trabajadores', { 
                  state: 
                    { 
                      nombres: nombres,
                      apellidos: apellidos
                    }
                  });
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
