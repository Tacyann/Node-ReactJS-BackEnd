const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const idMedico = request.headers.authorization;

        const consulta = await connection ('consulta')
        .where('idMedico', idMedico)
        .select('*');

        return response.json(consulta);
    }
}