const tours = require('@services').v1.tours;

exports.getTours = async (req, res, nex) => {};

exports.postTours = async (req, res, nex) => {
   try {
      const result = await tours?.postTours(req?.body);
      res.status(200).send({
         status: 200,
         message: 'Successfully Performed the Action',
         data: result,
      });
   } catch (e) {
      res.status(400).send({
         status: 400,
         message: 'Something Went Wrong!',
         error: e?.message,
      });
   }
};

exports.getTour = async (req, res, nex) => {};
