import axios from "axios";

class ValoracionesService {
  async getValoraciones(idCompetencia) {
    return await axios.get('http://localhost:3001/valoraciones', {
      params: {
        idCompetencia
      }
    });
  }

  async postValoraciones(idCompetencia, quien, puntuacion) {
    return await axios.post('http://localhost:3001/valoraciones', {
      idCompetencia,
      quien,
      puntuacion
    })
  }


}

export default new ValoracionesService();
