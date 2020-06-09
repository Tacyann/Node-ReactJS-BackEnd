const connection = require('../database/connection');
const MedicoController = require('./MedicoController');

module.exports = {

    async create(request, response) {
        const { idMedico} = request.body;

        try {
            const medico = await connection('medico').where( 'idMedico', idMedico)
            .select('nomeMedico')
            .first();
            //console.log(medico);
            if (!medico) {
                return response.status(400).json({ error: 'Não foi encontrado Medico com esse ID' });
            }

            return response.json(medico);

        } catch (e) {
            console.log(e);
            console.log("Login não encontrado!");
            return response.json({ mensagem: "Login não encontrado!" })
        }
    }
}