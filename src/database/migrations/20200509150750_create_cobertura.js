
exports.up = function(knex) {
    return knex.schema.createTable('cobertura', function(table){
        table.string('idCobertura').primary();
        table.string('descCobertura').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cobertura');
};
