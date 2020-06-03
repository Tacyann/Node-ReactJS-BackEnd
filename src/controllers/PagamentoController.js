const crypto = require('crypto');
const connection = require('../database/connection');
const ConsultaController = require('./ConsultaController');

module.exports = {

    async index(request, response) {
        try {
            const pagamento = await connection('pagamento').select('*');
            return response.json(pagamento);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar a pagamento!");
            return response.json({ mensagem: "Não foi possível consultar a pagamento!" })
        }
    },

    async create(request, response) {
        try {
            const { valor, datPagamento } = request.body;
            const idPagamento = crypto.randomBytes(4).toString('HEX');
            await connection('pagamento').insert({
                idPagamento,
                valor,
                datPagamento,
            })

            return response.json({ idPagamento });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar receita!");
            return response.json({ mensagem: "Não foi possível cadastrar receita!" })
        }
    },

    async delete(request, response) {
        const { idPagamento } = request.params;// eu vou pegar o id que vem da minha routa de parametros
        const pagamento = await connection('pagamento').where('idPagamento', idPagamento).select("*");
        if (pagamento.length == 0) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('pagamento').where('idPagamento', idPagamento).delete("*");

        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idPagamento } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { valor } = request.body;
            const { datPagamento } = request.body;

            const pagamento = await connection('pagamento').where('idPagamento ', idPagamento).select("*");
            if (pagamento.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('pagamento').where('idPagamento ', idPagamento)
                .update({
                    idPagamento,
                    valor,
                    datPagamento,
                });
            return response.json(pagamento);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar pagamento!");
            return response.json({ mensagem: "Não foi possível alterar a pagamento!" })
        }
    },


};