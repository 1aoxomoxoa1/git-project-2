const express = require("express");
const db = require("./db.js");
const PORT = 4100;

// express app
const app = express();

// connect to db
db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// here will be router

// waiting for requests
app.listen(PORT);