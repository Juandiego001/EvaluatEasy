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

  async postUsuarios(nombres, apellidos, cargo, correo, telefono) {
    return await axios.post('http://localhost:3001/usuarios', 
    { 
      correo: correo,      
      nombres: nombres,
      apellidos: apellidos,
      cargo: cargo,
      telefono: telefono
    })
  }
  
  async putUsuarios(nombres, apellidos, correo, nuevoCorreo, contrasena) {
    return await axios.put('http://localhost:3001/usuarios', 
    {
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      nuevoCorreo: nuevoCorreo,
      contrasena: contrasena
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
}

export default new UsuariosService();
