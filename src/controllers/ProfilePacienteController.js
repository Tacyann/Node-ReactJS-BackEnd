const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const idPaciente = request.headers.authorization;

        const consulta = await connection ('consulta')
        .where('paciente_id', idPaciente)
        .select('*');

        return response.json(consulta);
    }
}