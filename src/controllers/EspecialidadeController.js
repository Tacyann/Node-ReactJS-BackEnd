const crypto = require('crypto');
const connection = require('../database/connection');
const MedicoController = require('./MedicoController');

module.exports = {


    async index(request, response) {
        try {
            const especialidade = await connection('especialidade').select('*');
            return response.json(especialidade);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar as especialidades!");
            return response.json({ mensagem: "Não foi possível consultar as especialidades!" })
        }
    },


    async create(request, response) {
        try {
            const { descEspecialidade } = request.body;
            const especialidade = await connection('especialidade').select('*').where({ descEspecialidade });
            if (especialidade.length !== 0) {
                return response.json({ mensagem: "Essa especialidade já encontra-se cadastrada!" })
            }
            const idEspecialidade = crypto.randomBytes(4).toString('HEX');

            await connection('especialidade').insert({
                idEspecialidade,
                descEspecialidade,
            })

            return response.json({ idEspecialidade });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar especialidade!");
            return response.json({ mensagem: "Não foi possível cadastrar especialidade!" })
        }
    },

    async delete(request, response) {
        const { idEspecialidade } = request.params;

        const medico = await connection('medico').where('especialidade_id', idEspecialidade).first();
        //console.log(medico.especialidade_id);
        if (medico) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('especialidade').where('idEspecialidade', idEspecialidade).delete("*");
        //console.log(connection);
        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idEspecialidade } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { descEspecialidade } = request.body;

            const especialidade = await connection('especialidade').where('idEspecialidade ', idEspecialidade).select("*");
            if (especialidade.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('especialidade').where('idEspecialidade ', idEspecialidade)
                .update({
                    idEspecialidade,
                    descEspecialidade
                });
            return response.json(especialidade);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar a especialidade!");
            return response.json({ mensagem: "Não foi possível alterar a especialidade!" })
        }
    },
};
