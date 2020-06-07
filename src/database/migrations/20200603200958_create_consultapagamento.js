
exports.up = function(knex) {
    return knex.schema.createTable('consultapagamento', function(table){
            table.string('idConsulta').primary();
        
            table.string ('consulta_id').notNullable();
            table.foreign('consulta_id').references('idConsulta').inTable('particular');
            table.string ('idPagamento').notNullable();
            table.foreign('idPagamento').references('idPagamento').inTable('pagamento');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('consultapagamento');
};
