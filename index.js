const app = require('express')();
const routes = require('./src/routes');

app.use('/', routes);
