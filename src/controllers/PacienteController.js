const crypto = require('crypto');
const connection = require('../database/connection');
const EnderecoController = require('./EnderecoController');


module.exports = {
    async index(request, response) {
        try {
            const paciente = await connection('paciente').select('*');
            return response.json(paciente);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar os pacientes!");
            return response.json({ mensagem: "Não foi possível consultar os pacientes!" })
        }
    },

    async create(request, response) {
        try {
            const { nomePaciente, datNascimento, telPaciente, RGPaciente, CPFPaciente, endereco_id } = request.body;
            const idPaciente = crypto.randomBytes(4).toString('HEX');
            await connection('paciente').insert({
                idPaciente,
                nomePaciente,
                datNascimento,
                telPaciente,
                RGPaciente,
                CPFPaciente,
                endereco_id,
            })

            return response.json({ idPaciente });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar paciente!");
            return response.json({ mensagem: "Não foi possível cadastrar paciente!" })
        }
    },

};