const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require('./routes/user')
const URI = process.env.DB_URI;
const PORT = process.env.SERVER_PORT;
const bodyparser = require('body-parser')
const todoRouter = require('./routes/todo')

app.use(bodyparser.json())
app.use('/',userRouter);
app.use('/',todoRouter);

mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend server is running on http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.log("Error came while DB connection");
    console.log(e);
  });
