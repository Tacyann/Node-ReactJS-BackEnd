const crypto = require('crypto');
const connection = require('../database/connection');
const EspecialistaController = require('./controllers/EspecialistaController');

module.exports = {

    async index(request, response) {
        /**TODO: 
         *  - tem que colocar um try catch que cubra todo esse código
         *    pois se der erro no await, será retornado uma exceção.
         *    O ideal é colocar o try/catch e retornar uma mensagem
         *    tratada, tipo: "Não foi possível consultar os médicos!"
         */
        const medico = await connection('medico').select('*');
        return response.json(medico);
    },

    async create(request, response) {
        /**TODO: 
         *  - tem que colocar um try catch que cubra todo esse código
         *    pois se der erro no await, será retornado uma exceção.
         *    O ideal é colocar o try/catch e retornar uma mensagem
         *    tratada, tipo: "Não foi possível cadastrar médico!"
         *  - constante "nomeMedico" não existe (linha 31), a que deve ser 
         *    usada é a "name" (linha 27)
         */
        const { name, CRM } = request.body;
        const idEspecialidade = crypto.randomBytes(4).toString('HEX');

        await connection('medico').insert({
            nomeMedico,
            CRM,
            idEspecialidade,
        })

        return response.json({ idEspecialidade });
    }
};