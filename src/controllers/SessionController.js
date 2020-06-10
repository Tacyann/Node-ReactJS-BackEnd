const connection = require('../database/connection');
const MedicoController = require('./MedicoController');
const PacienteController = require('./PacienteController');

module.exports = {

 
        async create (request, response) {
            const { idSession} = request.body;
    
            try {
                const msessionedico = await connection('session').where( 'idSession', idSession)
                .select('idSession')
                .first();
                //console.log(medico);
                if (!session) {
                    return response.status(400).json({ error: 'Não foi encontrado  ID' });
                }  
                return response.json(session);
    
            } catch (e) {
                console.log(e);
                console.log("Login não encontrado!");
                return response.json({ mensagem: "Login não encontrado!" })
            }
        }
}