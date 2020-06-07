const express = require('express');
const EspecialidadeController = require('./controllers/EspecialidadeController');
const MedicoController = require('./controllers/MedicoController');
const PacienteController = require('./controllers/PacienteController');
const CoberturaController = require('./controllers/CoberturaController');
const ConsultaController = require('./controllers/ConsultaController');
const SessionPacienteController = require('./controllers/SessionPacienteController');
const SessionMedicoController = require('./controllers/SessionMedicoController');
const SessionController = require('./controllers/SessionController');
const ReceitaController = require('./controllers/ReceitaController');
const PagamentoController = require('./controllers/PagamentoController');
const ExameController = require('./controllers/ExameController');
const FormasController = require('./controllers/FormasController');
const ProfilePacienteController = require('./controllers/ProfilePacienteController');
const ProfileMedicoController = require('./controllers/ProfileMedicoController');
const AgendarConsultaController = require('./controllers/AgendarConsultaController');


//desacoplando o modo de Rotas no express em uma nova variavel
const routes = express.Router();

routes.post('/sessionpaci', SessionPacienteController.create);
routes.post('/sessionmed', SessionMedicoController.create);
routes.post('/session', SessionController.create);

routes.get('/profilepaci', ProfilePacienteController.index);
routes.get('/profilemed', ProfileMedicoController.index);

routes.post('/agendar', AgendarConsultaController.create);

routes.get('/especialidade', EspecialidadeController.index);
routes.post('/especialidade', EspecialidadeController.create);
routes.delete('/especialidade/:idEspecialidade', EspecialidadeController.delete);
routes.put('/especialidade/:idEspecialidade', EspecialidadeController.update);

routes.post('/medico', MedicoController.create);
routes.get('/medico', MedicoController.index);
routes.delete('/medico/:idMedico', MedicoController.delete);
routes.put('/medico/:idMedico', MedicoController.update);


routes.post('/paciente', PacienteController.create);
routes.get('/paciente', PacienteController.index);
routes.delete('/paciente/:idPaciente', PacienteController.delete);
routes.put('/paciente/:idPaciente', PacienteController.update);

routes.post('/cobertura', CoberturaController.create);
routes.get('/cobertura', CoberturaController.index);
routes.delete('/cobertura/:idCobertura', CoberturaController.delete);
routes.put('/cobertura/:idCobertura', CoberturaController.update);


routes.post('/consulta', ConsultaController.create);
routes.get('/consulta', ConsultaController.index);
routes.delete('/consulta/:idConsulta', ConsultaController.delete);
routes.put('/consulta/:idConsulta', ConsultaController.update);


routes.post('/receita', ReceitaController.create);
routes.get('/receita', ReceitaController.index);
routes.delete('/receita/:idReceita', ReceitaController.delete);
routes.put('/receita/:idReceita', ReceitaController.update);

routes.post('/pagamento', PagamentoController.create);
routes.get('/pagamento', PagamentoController.index);
routes.delete('/pagamento/:idPagamento', PagamentoController.delete);
routes.put('/pagamento/:idPagamento', PagamentoController.update);

routes.post('/exame', ExameController.create);
routes.get('/exame', ExameController.index);
routes.delete('/exame/:idReqExame', ExameController.delete);
routes.put('/exame/:idReqExame', ExameController.update);


routes.post('/formas', FormasController.create);
routes.get('/formas', FormasController.index);
routes.delete('/formas/:idFomasPagamento', FormasController.delete);
routes.put('/formas/:idFomasPagamento', FormasController.update);

module.exports = routes;