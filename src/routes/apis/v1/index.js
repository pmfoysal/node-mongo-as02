const tour = require('./tour');
const tours = require('./tours');
const v1 = require('express').Router();

v1.use('/tour', tour);
v1.use('/tours', tours);

module.exports = v1;
