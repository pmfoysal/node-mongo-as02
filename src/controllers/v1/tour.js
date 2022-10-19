const tour = require('@services').v1.tour;

exports.getTrending = async (req, res, nex) => {
   try {
      const result = await tour?.getTrending(req?.query);
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

exports.getCheapest = async (req, res, nex) => {};

exports.patchTour = async (req, res, nex) => {
   try {
      const result = await tour?.patchTour(req?.params?.id, req?.body);
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
