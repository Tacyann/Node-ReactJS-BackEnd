const express = require('express');


const EspecialistaController = require('./controllers/EspecialistaController');
//const MedicoController = require('./controllers/MedicoController');

/*desacoplando o modo de Rotas no express em uma nova variavel*/
const routes = express.Router();

//routes.get('/medico', MedicoController.index);
//routes.post('/medico', MedicoController.create); 
routes.get('/especialidade', EspecialistaController.index);
routes.post('/especialidade', EspecialistaController.create); 

module.exports = routes;