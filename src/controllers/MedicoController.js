const crypto = require('crypto');
const connection = require('../database/connection');
const EspecialidadeController = require('./EspecialidadeController');

module.exports = {
    async index(request, response) {
        try {
            const medico = await connection('medico').select('*');
            return response.json(medico);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar os médicos!");
            return response.json({ mensagem: "Não foi possível consultar os médicos!" })
        }
    },

    async create(request, response) {
        try {
            const { nomeMedico, CRM, especialidade_id } = request.body;
            const idMedico = crypto.randomBytes(4).toString('HEX');
            await connection('medico').insert({
                idMedico,
                nomeMedico,
                CRM,
                especialidade_id,
            })

            return response.json({ idMedico });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar médico!");
            return response.json({ mensagem: "Não foi possível cadastrar médico!" })
        }
    },

    async delete(request, response) {
        const { idMedico } = request.params;// eu vou pegar o id que vem da minha routa de parametros

        const medico = await connection('medico').where('idMedico', idMedico).select("*");
        if (medico.length == 0) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('medico').where('idMedico', idMedico).delete("*");

        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idMedico } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { nomeMedico, CRM, especialidade_id } = request.body;

            const medico = await connection('medico').where('idMedico', idMedico).select("*");
            if (medico.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('medico').where('idMedico', idMedico)
                .update({
                    nomeMedico,
                    CRM,
                    especialidade_id,
                });
            return response.json(medico);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar os médicos!");
            return response.json({ mensagem: "Não foi possível alterar os médicos!" })
        }
    },

};