const { Sequelize } = require('sequelize');
const mysql = require("mysql2/promise");

const db = new Sequelize(
  {
  username: "root",
  password: "177013",
  database: "git_project",
  host: "localhost",
  port: 3306,
  dialect: "mysql", 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
});

module.exports = db;