import axios from 'axios';

class UsuariosService {

  async logIn(correo, contrasena) {
    return await axios.get('http://localhost:3001/usuarios', 
    { 
      params: 
      {
        correo: correo,
        contrasena: contrasena
      }
    }
  )}
  
  // Este método será utilizado para crear trabajadores
  async postUsuarios(correo, contrasena, nombres, apellidos, cargo, tipo) {
    return await axios.post('http://localhost:3001/usuarios', 
    { 
      correo, 
      contrasena,
      nombres,
      apellidos,
      cargo,
      tipo
    })
  }
  
  // Actualiza todos los usuarios.
  // También sirve para actualizar a un trabajador.
  async putUsuarios(correo, nuevoCorreo, contrasena, nombres, apellidos) {
    return await axios.put('http://localhost:3001/usuarios', 
    {
      correo,
      nuevoCorreo,
      contrasena,
      nombres,
      apellidos,
    })
  }

  // Elimina todos los usuarios.
  // Sirve para eliminar un trabajador
  async deleteUsuarios(correo) {
    return await axios.delete('http://localhost:3001/usuarios', 
    {
      params: {
        correo
      }
    })
  }

  // Obtener la contraseña de los usuarios
  async getContrasena(correo) {
    return await axios.get('http://localhost:3001/usuarios-contrasena', 
    {
      params: 
        {
          correo: correo
        }
    })
  }

  // Obtener los trabjadores
  async getTrabajadores() {
    return await axios.get('http://localhost:3001/usuarios-trabajadores');
  }

  // Actualizar los trabajadores desde la interfaz de gerentes
  async putTrabajadores(correo, nuevoCorreo, contrasena, nombres, apellidos, cargo, tipo) {
    return await axios.put('http://localhost:3001/usuarios-trabajadores', {
      correo,
      nuevoCorreo,
      contrasena,
      nombres,
      apellidos,
      cargo,
      tipo
    })
  }

}

export default new UsuariosService();
