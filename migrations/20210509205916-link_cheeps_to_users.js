'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.changeColumn(
          'Users', // table name
          'username', // new field name
          {
            type: Sequelize.STRING,
            unique: true,
          },

        ),
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
