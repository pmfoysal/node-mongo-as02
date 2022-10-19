const tour = require('@models').v1.tours;

exports.patchTour = async (id, data) => {
   return await tour?.updateOne({ _id: id }, data, { runValidators: true });
};
