
exports.up = function(knex) {
        return knex.schema.createTable('session', function(table){
        table.string('idSession').primary();
    
        table.string ('idPaciente');
        table.foreign('idPaciente').references('idPaciente').inTable('paciente');
        table.string ('idMedico');
        table.foreign('idMedico').references('idMedico').inTable('medico');
        }); 
    };


exports.down = function(knex) {
    return knex.schema.dropTable('session');
};
