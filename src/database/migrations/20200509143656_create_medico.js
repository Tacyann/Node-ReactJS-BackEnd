
/*responsavel por criar a minha tabela*/
exports.up = function(knex) {
 return  knex.schema.createTable('medico', function(table){
    table.string('idMedico').primary();
    table.string('nomeMedico').notNullable();
    table.string('CRM').notNullable();

    table.string ('especialidade_id').notNullable();
    table.foreign('especialidade_id').references('idEspecialidade').inTable('especialidade');
    knex.select('descEspecialidade').from('especialidade');

  });
};

/*se eu precisar voltar atras da criacao de uma tabela*/
exports.down = function(knex) {
  return knex.schema.dropTable('medico');
};
