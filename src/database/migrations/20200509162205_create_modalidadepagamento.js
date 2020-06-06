
exports.up = function(knex) {
    return knex.schema.createTable('modalidade', function(table){
    table.string('idConsulta').primary();

    table.string ('idConsulta').notNullable();
    table.foreign('idConsulta').references('idPagamento').inTable('pagamento');
    table.string ('idFomasPagamento').notNullable();
    table.foreign('idFomasPagamento').references('idFomasPagamento').inTable('formaspagamento');
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('modalidade');
};
