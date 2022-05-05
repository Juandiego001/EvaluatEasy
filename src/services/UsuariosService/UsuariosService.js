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
      nombres: nombres,
      apellidos: apellidos,
      cargo: 'Mesero',
      correo: correo,
      telefono: telefono
    })
  }
  
}

export default new UsuariosService();
