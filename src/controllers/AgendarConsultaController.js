const crypto = require('crypto');
const connection = require('../database/connection');
const MedicoController = require('./MedicoController');
const PacienteController = require('./PacienteController');
const ConsultaController = require('./ConsultaController');



module.exports = {
    async create (request, response){
        const {data_id, medico_id} = request.body;
        const paciente_id = request.headers.authorization;
        //const paciente_id = crypto.randomBytes(4).toString('HEX');

        const agenda = await connection('agendarconsulta').insert({
            paciente_id,
            data_id,
            medico_id,
            consulta_id,
        });
        return response.json({ agenda });
    }
}