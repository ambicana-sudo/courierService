const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const connect = require('./db/connect')
connect()

app.use(bodyParser.json())
app.use(cors())


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })