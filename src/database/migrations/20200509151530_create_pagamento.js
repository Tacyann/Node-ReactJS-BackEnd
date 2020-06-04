
exports.up = function(knex) {
    return knex.schema.createTable('pagamento', function(table){
        table.string('idPagamento').primary();
        table.decimal('valor').notNullable();
        table.date('datPagamento').notNullable();


        
    
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pagamento');
};
