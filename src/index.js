const express = require('express');
const routes = require('./routes');


const app = express();
//server(ctx => 'Hello world!');

app.use(express.json());
app.use(routes);


app.listen(3333);