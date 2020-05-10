
exports.up = function(knex) {
    return knex.schema.createTable('paciente', function(table){
        table.string('idPaciente').primary();
        table.string('nomePaciente').notNullable();
        table.date('datNascimento').notNullable();
        table.integer('telPaciente').notNullable();
        table.integer('RGPaciente').notNullable();
        table.integer('CPFPaciente').notNullable();

       table.string ('endereco_id').notNullable();

       table.foreign('endereco_id').references('idEndereco').inTable('endereco');

      });
};

exports.down = function(knex) {
   return knex.schema.dropTable('paciente');
};
