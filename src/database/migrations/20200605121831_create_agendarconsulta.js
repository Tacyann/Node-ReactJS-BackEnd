
exports.up = function(knex) {
    return knex.schema.createTable('agendarconsulta', function(table){
            table.string('idConsulta').primary();
        
            table.string ('idPagamento').notNullable();
            table.foreign('idPagamento').references('idPagamento').inTable('pagamento');
            });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('agendarconsulta');
};
