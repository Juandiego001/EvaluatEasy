import axios from "axios";

class ValoracionesFinalesService {
  async getValoracionesFinales(idCompetencia) {
    return await axios.get('http://localhost:3001/valoraciones-finales', {
      params: {
        idCompetencia
      }
    });
  }


}

export default new ValoracionesFinalesService();
