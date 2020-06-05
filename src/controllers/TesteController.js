const crypto = require('crypto');
const connection = require('../database/connection');
const ConsultaController = require('./ConsultaController');

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


};
