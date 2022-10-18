function errorHandler([message, status], req, res, nex) {
   res.status(status || 400).send({
      status: 'Failed',
      message: 'Something went wrong!',
      error: message,
   });
}

module.exports = errorHandler;
