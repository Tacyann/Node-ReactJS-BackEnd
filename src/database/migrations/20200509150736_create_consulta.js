
exports.up = function(knex) {
    return knex.schema.createTable('consulta', function(table){
        table.string('idConsulta').primary();
        table.date('dataConsulta').notNullable();

 
        table.string ('medico_id').notNullable();
        table.foreign('medico_id').references('idMedico').inTable('medico');
        table.string ('paciente_id').notNullable();
        table.foreign('paciente_id').references('idPaciente').inTable('paciente');
        table.string ('cobertura_id').notNullable();
        table.foreign('cobertura_id').references('idCobertura').inTable('cobertura');
    
    
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('consulta');
};
