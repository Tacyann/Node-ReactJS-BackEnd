
exports.up = function(knex) {
    return knex.schema.createTable('exame', function(table){
        table.string('idReqExame').primary();
        table.string('descReqExame').notNullable();
        table.date('dataReqExame').notNullable();

        table.string ('consulta_id').notNullable();
        table.foreign('consulta_id').references('idConsulta').inTable('consulta');
      }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable('exame');
};
