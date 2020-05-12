const express = require('express');
const EspecialistaController = require('./controllers/EspecialistaController');
const MedicoController = require('./controllers/MedicoController');

//desacoplando o modo de Rotas no express em uma nova variavel
const routes = express.Router();

routes.get('/especialidade', EspecialistaController.index);
routes.post('/especialidade', EspecialistaController.create); 
routes.post('/medico', MedicoController.create);



module.exports = routes;