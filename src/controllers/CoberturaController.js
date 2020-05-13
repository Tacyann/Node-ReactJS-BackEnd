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
        
    }
};
