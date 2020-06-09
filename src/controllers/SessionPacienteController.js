const connection = require('../database/connection');
const PacienteController = require('./PacienteController');

module.exports = {

    async create(request, response) {
        try {
            const paciente = await connection('paciente').select('nomePaciente');
            //console.log(paciente);
            if (!paciente) {
                return response.status(400).json({ error: 'Não foi encontrado Paciente com esse ID' });
            }

            return response.json(paciente);

        } catch (e) {
            console.log(e);
            console.log("Login não encontrado!");
            return response.json({ mensagem: "Login não encontrado!" })
        }
    }
}