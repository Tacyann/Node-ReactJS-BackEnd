const crypto = require('crypto');
const connection = require('../database/connection');
const EspecialistaController = require('../controllers/EspecialistaController');


module.exports = {
    async index (request, response){
        try {  
            const medico = await connection('medico').select('*');
            return response.json(medico);
            }catch(e){
                console.log(e);
                console.log("Não foi possível consultar os médicos!");
                return response.json({mensagem: "Não foi possível consultar os médico!"})
            }
    },
        
    async create(request, response){ 
    try{
    const { name, CRM } = request.body;  
    const  idMedico = crypto.randomBytes(4).toString('HEX');
    await connection('medico').insert({
            idMedico,
            name,
            CRM,
            idEspecialidade,
        })
        
            return response.json({idMedico}); 
    } catch{
        console.log(e);
        console.log("Não foi possível cadastrar médico!");
        return response.json({mensagem: "Não foi possível cadastrar médico!"}) 
    }
},
     
};