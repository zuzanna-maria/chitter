'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Cheeps',
        'username',
        {
          type: Sequelize.STRING,

        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
