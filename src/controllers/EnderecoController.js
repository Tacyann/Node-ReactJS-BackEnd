const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {


    async index(request, response) {
        try {
            const endereco = await connection('endereco').select('*');
            return response.json(endereco);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível consultar o Endereco");
            return response.json({ mensagem: "Não foi possível realizar a consulta" })
        }
    },


    async create(request, response) {
        try {
            const { Rua, Bairro, Numero } = request.body;
            const idEndereco= crypto.randomBytes(4).toString('HEX');

            await connection('endereco').insert({
                idEndereco,
                Rua,
                Bairro,
                Numero,
            })

            return response.json({ idEndereco });
        } catch(e){
            console.log(e);
            console.log("Não foi possível cadastrar especialidade!");
            return response.json({ mensagem: "Não foi possível cadastrar especialidade!" })
        }
    },

    async delete(request, response) {
        const { idEndereco } = request.params;

        const paciente = await connection('paciente').first('endereco_id').where('endereco_id', idEndereco);
        const endereco_id = { paciente };
        //console.log(medico.especialidade_id);
        if (paciente.endereco_id != "") {
            return response.status(401).json({ error: "Operação não permitida." })
        }

        await connection('endereco').where('endereco_id', idEndereco).delete("*");
        //console.log(connection);
        return response.status(204).send();
    },

    async update(request, response) {
        try {
            const { idEndereco } = request.params;// eu vou pegar o id que vem da minha routa de parametros
            const { Rua, Bairro, Numero} = request.body;

            const endereco = await connection('endereco').where('idEndereco ', idEndereco).select("*");
            if (endereco.length == 0) {
                return response.status(401).json({ error: "Operação não permitida." })
            }

            await connection('endereco').where('idEndereco', idEndereco)
                .update({
                    idEndereco,
                    Rua,
                    Bairro,
                    Numero,
                });
            return response.json(endereco);
        } catch (e) {
            console.log(e);
            console.log("Não foi possível alterar o endereço!");
            return response.json({ mensagem: "Não foi possível alterar o endereço!" })
        }
    },
};
