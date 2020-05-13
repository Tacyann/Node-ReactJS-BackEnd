const express = require('express');
const EspecialistaController = require('./controllers/EspecialistaController');
const MedicoController = require('./controllers/MedicoController');
const EnderecoController = require('./controllers/EnderecoController');
const PacienteController = require('./controllers/PacienteController');
const CoberturaController = require('./controllers/CoberturaController');
const ConsultaController = require('./controllers/ConsultaController');


//desacoplando o modo de Rotas no express em uma nova variavel
const routes = express.Router();

routes.get('/especialidade', EspecialistaController.index);
routes.post('/especialidade', EspecialistaController.create);

routes.post('/medico', MedicoController.create);
routes.get('/medico', MedicoController.index);
routes.delete('/medico/:idMedico', MedicoController.delete);
routes.put('/medico/:idMedico', MedicoController.update);

routes.post('/endereco', EnderecoController.create);
routes.get('/endereco', EnderecoController.index);

routes.post('/cobertura', CoberturaController.create);
routes.get('/cobertura', CoberturaController.index);

routes.post('/consulta', ConsultaController.create);
routes.get('/consulta', ConsultaController.index);

module.exports = routes;