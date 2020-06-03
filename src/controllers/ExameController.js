const crypto = require('crypto');
const connection = require('../database/connection');
const ConsultaController = require('./ConsultaController');

module.exports = {

    async index(request, response) {
        try {
            const exame = await connection('exame').select('*');
            return response.json(exame);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar o Exame!");
            return response.json({ mensagem: "Não foi possível consultar c!" })
        }
    },

    async create(request, response) {
        try {
            const { descReqExame, dataReqExame, consulta_id } = request.body;
            const idReqExame = crypto.randomBytes(4).toString('HEX');
            await connection('exame').insert({
                idReqExame,
                descReqExame,
                dataReqExame,
                consulta_id,
            })

            return response.json({ idReqExame });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar o Exame!");
            return response.json({ mensagem: "Não foi possível cadastrar o Exame!" })
        }
    },

    async delete(request, response) {
        const { idReqExame } = request.params;// eu vou pegar o id que vem da minha routa de parametros
        const exame = await connection('exame').where('idReqExame', idReqExame).select("*");
        if (exame.length == 0) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('exame').where('idReqExame', idReqExame).delete("*");

        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idReqExame } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { descReqExame, dataReqExame, consulta_id } = request.body;
            const exame = await connection('exame').where('idReqExame', idReqExame).select("*");
            if (exame.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('exame').where('idReqExame', idReqExame)
                .update({
                    idReqExame,
                    descReqExame,
                    dataReqExame,
                    consulta_id,
                });
            return response.json(exame);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar o Exame!");
            return response.json({ mensagem: "Não foi possível alterar o Exame!" })
        }
    },    

};