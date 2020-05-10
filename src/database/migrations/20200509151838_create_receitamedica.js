
exports.up = function(knex) {
    return knex.schema.createTable('receitamedica', function(table){
        table.string('idReceita').primary();
        table.string('descReceita').notNullable();
        table.date('dataReceita').notNullable();

        table.string ('consulta_id').notNullable();
        table.foreign('consulta_id').references('idConsulta').inTable('consulta');
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('receitamedica');
};
