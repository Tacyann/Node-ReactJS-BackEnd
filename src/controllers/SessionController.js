const connection = require('../database/connection');

module.exports = {

    async create(request, response) {
        try {
            const { idPaciente } = request.body;

            const paciente = await connection('paciente')
                .where('idPaciente', idPaciente)
                .select('this.nomePacientenomePaciente')
                .first();

            if (!paciente) {
                return response.status(400).json({ error: 'Não foi encontrado Paciente com esse ID' });
            }

            return response.json(paciente);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar médico!");
            return response.json({ mensagem: "Não foi possível cadastrar médico!" })
        }
    }
}