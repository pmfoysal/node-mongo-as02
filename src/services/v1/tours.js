const tours = require('@models').v1.tours;

exports.getTours = async queries => {
   const fields = queries?.fields?.replaceAll(/[\, ]/g, ' ');
   const start = queries?.limit * (queries?.page - 1);
   const data = await tours
      ?.find({ name: { $regex: queries?.search, $options: 'i' }, ...queries?.filter }, fields)
      .sort(queries?.sort);

   return {
      totalItems: data?.length,
      totalPages: Math.ceil(data?.length / (Number(queries?.limit) || data?.length)),
      data: data?.slice(start, start + Number(queries?.limit)),
   };
};

exports.postTours = async data => {
   return await tours?.create(data);
};

exports.getTour = async (id, fields) => {
   const queries = fields?.replaceAll(/[\, ]/g, ' ');
   return await tours?.findById(id, queries);
};
