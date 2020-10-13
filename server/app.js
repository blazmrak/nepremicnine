const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

require('db-migrate').getInstance(true).up();

app.use('/v1', require('./api/router'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})