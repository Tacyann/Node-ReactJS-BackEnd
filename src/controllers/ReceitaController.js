const crypto = require('crypto');
const connection = require('../database/connection');
const ConsultaController = require('./ConsultaController');

module.exports = {

    async index(request, response) {
        try {
            const receitamedica = await connection('receitamedica').select('*');
            return response.json(receitamedica);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar a receita!");
            return response.json({ mensagem: "Não foi possível consultar a receita!" })
        }
    },

    async create(request, response) {
        try {
            const { descReceita, dataReceita, consulta_id } = request.body;
            const idReceita = crypto.randomBytes(4).toString('HEX');
            await connection('receitamedica').insert({
                idReceita,
                descReceita,
                dataReceita,
                consulta_id,
            })

            return response.json({ idReceita });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar receita!");
            return response.json({ mensagem: "Não foi possível cadastrar receita!" })
        }
    },

    async delete(request, response) {
        const { idReceita } = request.params;// eu vou pegar o id que vem da minha routa de parametros
        const receitamedica = await connection('receitamedica').where('idReceita', idReceita).select("*");
        if (receitamedica.length == 0) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('receitamedica').where('idReceita', idReceita).delete("*");

        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idReceita } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { descReceita } = request.body;
            const { dataReceita } = request.body;

            const receitamedica = await connection('receitamedica').where('idReceita ', idReceita).select("*");
            if (receitamedica.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('receitamedica').where('idReceita ', idReceita)
                .update({
                    idReceita,
                    descReceita,
                    dataReceita,
                });
            return response.json(receitamedica);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar a receita!");
            return response.json({ mensagem: "Não foi possível alterar a receita!" })
        }
    },


};