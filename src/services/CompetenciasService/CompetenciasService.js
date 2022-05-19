import axios from "axios";

class CompetenciasService {
  async getCompetencias() {
    return await axios.get('http://localhost:3001/competencias');
  }


}

export default new CompetenciasService();
