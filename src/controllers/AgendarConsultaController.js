const crypto = require('crypto');
const connection = require('../database/connection');
const MedicoController = require('./MedicoController');
const PacienteController = require('./PacienteController');
const CoberturaController = require('./CoberturaController');


module.exports = {
    async index(request, response) {
        try {
            const consulta = await connection('consulta').select('*');
            return response.json(consulta);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível efetuar a consulta!");
            return response.json({ mensagem: "Não foi possível efetuar a consulta!" })
        }
    },

    async create(request, response) {
        
        try {
            const { dataConsulta, medico_id, paciente_id, tipoConsulta, cobertura_id, forma_id, valorTotal} = request.body;
            const idConsulta = crypto.randomBytes(4).toString('HEX');
            
            await connection('consulta').insert({
                idConsulta,
                dataConsulta,
                medico_id,
                paciente_id,
            });

            if(tipoConsulta === 'PLANO') {
                await connection('consultaPlano').insert({
                    idConsulta,
                    idcobertura: cobertura_id
                });
            } else {
                await connection('consultaPlano').insert({
                    idConsulta,
                    valorTotal,
                    forma_id
                }); 
            }

            return response.json({ idConsulta });
        } catch (e) {
            console.log(e);
            console.log("Não foi possível cadastrar uma consulta!");
            return response.json({ mensagem: "Não foi possível cadastrar uma consulta!" })
        }
    },

    async delete(request, response) {
        const { idConsulta } = request.params;// eu vou pegar o id que vem da minha routa de parametros

        const consulta = await connection('consulta').where('idConsulta', idConsulta).select("*");
        if (consulta.length == 0) {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('consulta').where('idConsulta', idConsulta).delete("*");

        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idConsulta } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { dataConsulta, medico_id, paciente_id } = request.body;

            const consulta = await connection('consulta').where('idConsulta ', idConsulta).select("*");
            if (consulta.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('consulta').where('idConsulta ', idConsulta)
                .update({
                    idConsulta,
                    dataConsulta,
                    medico_id,
                    paciente_id,
                });
            return response.json(consulta);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar consulta!");
            return response.json({ mensagem: "Não foi possível alterar consulta!" })
        }
    },

};