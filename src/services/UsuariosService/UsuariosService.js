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
  
}

export default new UsuariosService();
