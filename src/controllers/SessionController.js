const connection = require('../database/connection');
const PacienteController = require('./PacienteController');
const MedicoController = require('./MedicoController');

module.exports = {

    async create(request, response) {
        try {
            const paciente = await connection('paciente').select('nomePaciente').first();
            const medico = await connection('medico').select('nomeMedico').first();
            //console.log(paciente);
            if ((!paciente) || (!medico)) {
                return response.status(400).json({ error: 'Não foi encontrado Paciente com esse ID' });
            } 
            //const login = (paciente);
            //console.log(login);
            return response.json((paciente)|| (medico));

        } catch (e) {
            console.log(e);
            console.log("Login não encontrado!");
            return response.json({ mensagem: "Login não encontrado!" })
        }
    }
}