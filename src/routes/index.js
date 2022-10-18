const api = require('./apis');
const root = require('express').Router();

root.use('/api', api);

module.exports = root;
