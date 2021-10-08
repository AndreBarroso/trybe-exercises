'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
   return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: false,
        type: DataTypes.INTERGER,
      },
      pageQuantity: {
        allowNull: false,
        type: DataTypes.DATE,
      },

   }

   )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};
