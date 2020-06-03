
exports.up = function(knex) {

    return knex.schema.createTable('receita', function(table){
        table.string('idPagamento').primary();
        table.decimal('valor').notNullable();
        table.string('quantidade').notNullable();
        table.date('datPagamento').notNullable();
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('receita');
};
