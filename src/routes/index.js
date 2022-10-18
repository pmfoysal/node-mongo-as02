const api = require('./apis');
const root = require('express').Router();
const middlewares = require('@middlewares');

function routes(port) {
   root.route('/').get((req, res, nex) => {
      res.status(200).send({
         status: 200,
         message: `App is running on port: ${port}`,
      });
      nex();
   });
   root.use('/api', api);
   root.use(middlewares.errorHandler);
   return root;
}

module.exports = routes;
