'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Cheeps',
        'userId',
        {
          type: Sequelize.STRING,

        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
