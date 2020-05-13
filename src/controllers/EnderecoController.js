const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {


    async index(request, response) {
        try {
            const endereco = await connection('endereco').select('*');
            return response.json(endereco);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar o Endereco");
            return response.json({ mensagem: "Não foi possível realizar a consulta" })
        }
    },


    async create(request, response) {
        try {
            const { Rua, Bairro, Numero } = request.body;
            const idEndereco= crypto.randomBytes(4).toString('HEX');

            await connection('endereco').insert({
                idEndereco,
                Rua,
                Bairro,
                Numero,
            })

            return response.json({ idEndereco });
        } catch(e){
            console.log(e);
            console.log("Não foi possível cadastrar especialidade!");
            return response.json({ mensagem: "Não foi possível cadastrar especialidade!" })
        }
    },

    async delete(request, response){
        const{idEspecialidade} = request.params;
        
    }
};
