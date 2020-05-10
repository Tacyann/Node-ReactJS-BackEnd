
exports.up = function(knex) {
    return knex.schema.createTable('modalidade', function(table){
    table.string ('pagamento_id').notNullable();
    table.foreign('pagamento_id').references('idPagamento').inTable('pagamento');
    table.string ('formaspagamento_id').notNullable();
    table.foreign('formaspagamento_id').references('idFomasPagamento').inTable('formaspagamento');
}); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('modalidade');
};
