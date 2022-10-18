const tour = require('express').Router();
const controller = require('../../../../controllers/v1/tour');

tour.route('/trending').get(controller?.getTrending);
tour.route('/cheapest').get(controller?.getCheapest);
tour.route('/:id').patch(controller?.patchTour);

module.exports = tour;
