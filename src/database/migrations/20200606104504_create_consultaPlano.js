exports.up = function(knex) {
    return knex.schema.createTable('plano', function(table){
    table.string('idConsulta').primary();

    table.string ('idcobertura').notNullable();
    table.foreign('idcobertura').references('idcobertura').inTable('cobertura');
    table.foreign('idConsulta').references('idConsulta').inTable('consulta');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('plano');
};
