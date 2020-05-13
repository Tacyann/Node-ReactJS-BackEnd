const crypto = require('crypto');
const connection = require('../database/connection');

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
            const especialidade = await connection('especialidade').select('*').where({descEspecialidade});
            if(especialidade.length!==0){
                return response.json({ mensagem:"Essa especialidade já encontra-se cadastrada!"}) 
            }
            const idEspecialidade = crypto.randomBytes(4).toString('HEX');

            await connection('especialidade').insert({
                idEspecialidade,
                descEspecialidade,
            })

            return response.json({ idEspecialidade });
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
