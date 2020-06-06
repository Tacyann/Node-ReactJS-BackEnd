
exports.up = function(knex) {

    table.string('idConsulta').primary();

    return knex.schema.createTable('consultapagamento', function(table){

        table.string ('idConsulta').notNullable();
        table.foreign('idConsulta').references('idConsulta').inTable('particular');
        table.string ('idPagamento').notNullable();
        table.foreign('idPagamento').references('idPagamento').inTable('pagamento');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('consultapagamento');
};
