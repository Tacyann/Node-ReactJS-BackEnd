
exports.up = function(knex) {
    return knex.schema.createTable('formaspagamento', function(table){
        table.string('idFomasPagamento').primary();
        table.string('descFormasPagamento').notNullable();
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('formaspagamento');
};
