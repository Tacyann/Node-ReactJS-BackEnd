
exports.up = function(knex) {
    return knex.schema.createTable('especialidade', function(table){
        table.string('idEspecialidade').primary();      
        table.string('descEspecialidade').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('especialidade');
};