'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      order_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      items_num: Sequelize.INTEGER,
      total_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      username: Sequelize.STRING(7)
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
