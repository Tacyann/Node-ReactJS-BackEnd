const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const esp = await connection ('especialidade').select('*');

        return response.json(esp);
    },


    async create (request, response){
        const { descEspecialidade } = request.body;

        const  idEsp = crypto.randomBytes(4).toString('HEX');
     

    await connection('especialidade').insert({
       idEsp,
       descEspecialidade,
    })   
    
        return response.json({idEsp}); 
    }
};
