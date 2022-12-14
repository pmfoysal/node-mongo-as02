const tours = require('@models').v1.tours;

exports.getTours = async queries => {
   const fields = queries?.fields?.replaceAll(/[\, ]/g, ' ');
   const start = queries?.limit * (queries?.page - 1);
   const data = await tours
      ?.find({ name: { $regex: queries?.search || '', $options: 'i' }, ...queries?.filter }, fields)
      .sort(queries?.sort);

   return {
      totalItems: data?.length,
      totalPages: Math.ceil(data?.length / (Number(queries?.limit) || data?.length)),
      data: queries?.limit && queries?.page ? data?.slice(start, start + Number(queries?.limit)) : data,
   };
};

exports.postTours = async data => {
   return await tours?.create(data);
};

exports.getTour = async (id, fields) => {
   const queries = fields?.replaceAll(/[\, ]/g, ' ');
   await tours?.updateOne({ _id: id }, { $inc: { views: 1 } });
   return await tours?.findById(id, queries);
};
