const crypto = require('crypto');
const connection = require('../database/connection');
const EspecialistaController = require('./EspecialistaController');


module.exports = {
    async index(request, response) {
        try {
            const medico = await connection('medico').select('*');
            return response.json(medico);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar os médicos!");
            return response.json({ mensagem: "Não foi possível consultar os médicos!" })
        }
    },

    async create(request, response) {
        try {
            const { nomeMedico, CRM, especialidade_id } = request.body;
            const idMedico = crypto.randomBytes(4).toString('HEX');
            await connection('medico').insert({
                idMedico,
                nomeMedico,
                CRM,
                especialidade_id,
            })

            return response.json({ idMedico });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar médico!");
            return response.json({ mensagem: "Não foi possível cadastrar médico!" })
        }
    },

};