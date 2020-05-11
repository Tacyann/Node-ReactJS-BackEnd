const crypto = require('crypto');
const connection = require('../database/connection');
const EspecialistaController = require('./controllers/EspecialistaController');
module.exports = {
    async index (request, response){
        
        const medico = await connection('medico').select('*');

        return response.json(medico);
    },

    async create(request, response){

    const { name, CRM } = request.body;  
    const  idEspecialidade = crypto.randomBytes(4).toString('HEX');

    await connection('medico').insert({
        nomeMedico,
        CRM,
        idEspecialidade,
    })   
    
        return response.json({idEspecialidade}); 
    }
};