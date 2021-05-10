'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'email', // new field name
        {type: DataTypes.STRING,
          isEmail: true,
          allowNull: false,
          validate: {
          isEmail: {msg: 'Email invalid'},
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
