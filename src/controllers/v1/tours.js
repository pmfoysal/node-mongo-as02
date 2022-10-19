const tours = require('@services').v1.tours;

exports.getTours = async (req, res, nex) => {
   try {
      const result = await tours?.getTours(req?.query);
      res.status(200).send({
         status: 'Success',
         message: 'Performed the Action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something Went Wrong!',
         error: error?.message,
      });
   }
};

exports.postTours = async (req, res, nex) => {
   try {
      const result = await tours?.postTours(req?.body);
      res.status(200).send({
         status: 'Success',
         message: 'Performed the Action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something Went Wrong!',
         error: error?.message,
      });
   }
};

exports.getTour = async (req, res, nex) => {
   try {
      const result = await tours?.getTour(req?.params?.id, req?.query?.fields);
      res.status(200).send({
         status: 'Success',
         message: 'Performed the Action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something Went Wrong!',
         error: error?.message,
      });
   }
};
