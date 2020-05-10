const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const especialidade = await connection('especialidade').select('*');

        return response.json(especialidade);
    },

    async create(request, response){
       
    const  idEspecialidade = crypto.randomBytes(4).toString('HEX');
   
    await connection('especialidade').insert({
       idEspecialidadeo,
       descEspecialidade,
    })   
    
        return response.json({idEspecialidade}); 
    }
};
