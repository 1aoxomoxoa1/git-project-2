const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");
const Users = require("./users.js");


const Orders = sequelize.define("orders", {
  order_ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  items_num: DataTypes.INTEGER,
  total_price: {
    type: DataTypes.INTEGER,
    allowNull: false
    // get() {
    //   return `${this.items_num * 2.78}`;
    // },
    // set(/*value*/) {
    //   throw new Error('Do not try to set the value to this column!');
    // }
  },
  username: DataTypes.STRING(7)
}, {
  tableName: "orders",
  freezeTableName: true,
  timestamps: false
});

// Orders.associate = (models) => {
//   Orders.belongsTo(Users, {foreignKey: 'username', as: 'username'});
// }

module.exports = Orders;