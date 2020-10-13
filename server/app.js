const express = require('express')
const app = express()
const port = 3000

const v1 = require('./api/router');

app.use('/v1', v1);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})