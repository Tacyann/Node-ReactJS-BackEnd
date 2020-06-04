
exports.up = function(knex) {

    return knex.schema.createTable('consultapagamento', function(table){

        table.string ('consulta_id').notNullable();
        table.foreign('consulta_id').references('idConsulta').inTable('consulta');
        table.string ('pagamento_id').notNullable();
        table.foreign('pagamento_id').references('idPagamento').inTable('pagamento');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('consultapagamento');
};
