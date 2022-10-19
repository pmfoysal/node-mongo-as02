const tour = require('@models').v1.tours;

exports.patchTour = async (id, data) => {
   return await tour?.updateOne({ _id: id }, data, { runValidators: true });
};

exports.getTrending = async queries => {
   const fields = queries?.fields?.replaceAll(/[\, ]/g, ' ');
   return await tour?.find({}, fields).sort({ views: 'desc' }).limit(3);
};
