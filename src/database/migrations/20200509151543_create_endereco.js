
exports.up = function(knex) {
    return knex.schema.createTable('endereco', function(table){
        table.string('idEndereco').primary();
        table.string('Rua').notNullable();
        table.string('Bairro').notNullable();
        table.integer('Numero').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('endereco');
};
