require('colors');
require('dotenv').config();
const cors = require('cors');
require('./utilities/pathAlias')();
const express = require('express');
const routes = require('./src/routes');
const connectDB = require('@databases').v1.mongoDB;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/', routes(port));

app.listen(port, () => {
   console.log(`App is running on port: ${port}`.blue.bold);
   connectDB();
});
