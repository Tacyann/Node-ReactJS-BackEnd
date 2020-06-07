const connection = require('../database/connection');
const MedicoController = require('./MedicoController');
const PacienteController = require('./PacienteController');

module.exports = {

    async create(request, response) {
        try {
            const session = await connection('session').select('*').first();
            console.log(session);
            if (!session) {
                return response.status(400).json({ error: 'ID não cadastrado!' });
            }

            return response.json(session);

        } catch (e) {
            console.log(e);
            console.log("Login não encontrado!");
            return response.json({ mensagem: "Login não encontrado!" })
        }
    }
}