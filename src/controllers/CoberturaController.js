const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {


    async index(request, response) {
        try {
            const cobertura = await connection('cobertura').select('*');
            return response.json(cobertura);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar cobertura");
            return response.json({ mensagem: "Não foi possível realizar a cobertura" })
        }
    },


    async create(request, response) {
        try {
            const { descCobertura} = request.body;
            const idCobertura = crypto.randomBytes(4).toString('HEX');

            await connection('cobertura').insert({
                idCobertura,
                descCobertura,
            })

            return response.json({ idCobertura});
        } catch(e){
            console.log(e);
            console.log("Não foi possível cadastrar cobertura!");
            return response.json({ mensagem: "Não foi possível cadastrar cobertura!" })
        }
    },

    async delete(request, response){
        const{idEspecialidade} = request.params;
        
    },

    async update(request, response) {
        try {
            const { idCobertura } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { descCobertura} = request.body;

            const cobertura = await connection('cobertura').where('idCobertura ', idCobertura).select("*");
            if (cobertura.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('cobertura').where('idCobertura', idCobertura)
                .update({
                    idCobertura,
                    descCobertura,
                });
            return response.json(cobertura);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar a cobertura!");
            return response.json({ mensagem: "Não foi possível alterar a cobertura!" })
        }
    },
};
