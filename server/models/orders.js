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
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.itemsNum * 2.78}`;
    },
    set(value) {
      this.setDataValue('total_price', value);
    }
  },
  username: DataTypes.STRING(7)
}, {
  tableName: "orders",
  freezeTableName: true,
  timestamps: false
});

Orders.belongsTo(Users);

module.exports = Orders;