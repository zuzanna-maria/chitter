'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Users',
        'email',
        {type: Sequelize.STRING,
          isEmail: true,
          allowNull: false,
          validate: {
          isEmail: {msg: 'Email invalid'},
      }},
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
