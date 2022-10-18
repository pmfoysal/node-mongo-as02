require('colors');
require('dotenv').config();
const cors = require('cors');
require('module-alias/register');
require('./utilities/pathAlias')();
const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/', routes);

app.listen(port, () => {
   console.log(`App is running on port: ${port}`.blue.bold);
});
