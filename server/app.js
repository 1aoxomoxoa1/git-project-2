const express = require("express");
const mysql = require("mysql2");
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

// routes

const userRouter = require('./routes/userRoutes');

// requests

app.use('/api/users', userRouter);

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// waiting for requests

app.listen(PORT);