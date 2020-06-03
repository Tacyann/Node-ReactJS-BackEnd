const crypto = require('crypto');
const connection = require('../database/connection');
const ConsultaController = require('./ConsultaController');

module.exports = {

    async index(request, response) {
        try {
            const formaspagamento = await connection('formaspagamento').select('*');
            return response.json(formaspagamento);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar as Formas de pagamento!");
            return response.json({ mensagem: "Não foi possível consultar as Formas de pagamento!" })
        }
    },

    async create(request, response) {
        try {
            const { descFormasPagamento } = request.body;
            const idFomasPagamento = crypto.randomBytes(4).toString('HEX');
            await connection('formaspagamento').insert({
                idFomasPagamento,
                descFormasPagamento
            })

            return response.json({ idFomasPagamento });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar as Formas de pagamento!");
            return response.json({ mensagem: "Não foi possível cadastrar as Formas de pagamento!" })
        }
    },

    async delete(request, response) {
        const { idFomasPagamento } = request.params;// eu vou pegar o id que vem da minha routa de parametros
        const formaspagamento = await connection('formaspagamento').where('idFomasPagamento', idFomasPagamento).select("*");
        if (formaspagamento.length == 0) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('formaspagamento').where('idFomasPagamento', idFomasPagamento).delete("*");

        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idFomasPagamento } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { descFormasPagamento } = request.body;

            const formaspagamento = await connection('formaspagamento').where('idFomasPagamento ', idFomasPagamento).select("*");
            if (formaspagamento.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('formaspagamento').where('idFomasPagamento ', idFomasPagamento)
                .update({
                    idFomasPagamento,
                    descFormasPagamento,
                });
            return response.json(formaspagamento);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar pagamento!");
            return response.json({ mensagem: "Não foi possível alterar a pagamento!" })
        }
    },


};