const tours = require('@models').v1.tours;

exports.postTours = async data => {
   return await tours.create(data);
};
