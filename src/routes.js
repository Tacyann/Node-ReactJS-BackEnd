const express = require('express');
const EspecialistaController = require('./controllers/EspecialistaController');


//desacoplando o modo de Rotas no express em uma nova variavel
const routes = express.Router();

routes.get('/especialidade', EspecialistaController.index);
routes.post('/especialidade', EspecialistaController.create); 



module.exports = routes;