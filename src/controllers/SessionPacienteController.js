const connection = require('../database/connection');
const PacienteController = require('./PacienteController');

module.exports = {

    async create(request, response) {
        const { idPaciente } = request.body;

        try {
            const paciente = await connection('paciente').where( 'idPaciente', idPaciente)
            .select('nomePaciente')
            .first();
            if (!paciente) {
                return response.status(400).json({ error: 'Não foi encontrado Paciente com esse ID' });
            }
            //console.log(paciente);
            return response.json(paciente);
    
        } catch (e) {
            console.log(e);
            console.log("Login não encontrado!");
            return response.json({ mensagem: "Login não encontrado!" })
        }
    }
}