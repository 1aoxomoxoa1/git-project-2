const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");
const Orders = require("./orders.js");


const Users = sequelize.define("users", {
  username: {
    type: DataTypes.STRING(7),
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING(12),
    allowNull: false,
    unique: true
  },
  password: DataTypes.STRING(30),
}, {
  tableName: "users",
  freezeTableName: true,
  timestamps: false
});

Users.hasMany(Orders, {
  foreignKey: 'username'
})

module.exports = Users;