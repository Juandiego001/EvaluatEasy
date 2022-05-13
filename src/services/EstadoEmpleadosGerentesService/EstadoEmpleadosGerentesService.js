import axios from 'axios';

class EstadoEmpleadosGerentesService {

  async getEmpleados() {
    return await axios.get('http://localhost:3001/usuarios');
  }

}
