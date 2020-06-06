
exports.up = function(knex) {
    return knex.schema.createTable('particular', function(table){
    table.string('idConsulta').primary();

    table.string ('idConsulta').notNullable();
    table.foreign('idConsulta').references('idConsulta').inTable('consulta');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('particular');
};
