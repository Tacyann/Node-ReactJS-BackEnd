const connection = require('../database/connection');
const MedicoController = require('./MedicoController');

module.exports = {

    async create(request, response) {
        try {
            const medico = await connection('medico').select('nomeMedico').first();
            //console.log(paciente);
            if (!medico) {
                return response.status(400).json({ error: 'ID não cadastrado!' });
            }

            return response.json(medico);

        } catch (e) {
            console.log(e);
            console.log("Login não encontrado!");
            return response.json({ mensagem: "Login não encontrado!" })
        }
    }
}