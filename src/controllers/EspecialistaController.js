const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    /** TODO:
     *   - Quando formatar o código, coloque no máximo uma linha de espaçamento
     *     entre uma coisa e outra.
     *   - prefira separar o código nos moldes abaixo e utilizar um espaçamento 
     *     entre eles (max 1 linha), como no exemplo da função "create" (linha 44)
     *       > criação de variáveis/constantes
     *       > lógica
     *       > retorno
     *   - usar mesma lógica acima para o arquivo js inteiro:
     *       > requires
     *       > exports
     *       > criação de funções
     *   - o module.exports pode ser utilizado como está hoje, ou como no exemplo abaixo:
     *        ######################################
     *        # ...inicio do arquivo               #
     *        #                                    #
     *        # const xx = require('xx')           #
     *        #                                    #
     *        # async minhaFuncao(a, b) {          #
     *        #    ... minha implementação ...     #
     *        # }                                  #
     *        #                                    #
     *        # module.exports = { minhaFuncao }   #
     *        #                                    #
     *        # ...fim do arquivo                  #
     *        ######################################
     */

    async index(request, response) {
        try {  
        const especialidade = await connection('especialidade').select('*');
        return response.json(especialidade);
        }catch(e){
        console.log(e);
        console.log("Não foi possível consultar as especialidades!");
        return response.json({mensagem: "Não foi possível consultar as especialidades!"})
         }
    },

    async create(request, response) {
        try {
        const { descEspecialidade } = request.body;
        const idEspecialidade = crypto.randomBytes(4).toString('HEX');

        await connection('especialidade').insert({
            idEspecialidade,
            descEspecialidade,
        })

        return response.json({ idEspecialidade });
    }catch{
    console.log(e);
    console.log("Não foi possível cadastrar especialidade!");
    return response.json({mensagem: "Não foi possível cadastrar especialidade!"}) 
}
    },
};
