const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const idPaciente = request.headers.authorization;

        const consulta = await connection ('consulta')
        .where('idPaciente', idPaciente)
        .select('*');

        return response.json(consulta);
    }
}