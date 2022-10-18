const tours = require('express').Router();
const controller = require('@controllers').v1.tours;

tours.route('/').get(controller.getTours).post(controller.postTours);
tours.route('/:id').get(controller.getTour);

module.exports = tours;
