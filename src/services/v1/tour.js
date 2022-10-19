const tour = require('@models').v1.tours;

exports.getTrending = async queries => {
   const fields = queries?.fields?.replaceAll(/[\, ]/g, ' ');
   return await tour?.find({}, fields).sort({ views: 'desc' }).limit(3);
};

exports.getCheapest = async queries => {
   const fields = queries?.fields?.replaceAll(/[\, ]/g, ' ');
   return await tour?.find({}, fields).sort({ price: 'asc' }).limit(3);
};

exports.patchTour = async (id, data) => {
   return await tour?.updateOne({ _id: id }, data, { runValidators: true });
};
