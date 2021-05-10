'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'John Doe',
            email: 'demo@demo.com',
            password: '$321!pass!123$',
            username: 'johndoe',
            createdAt: new Date(),
            updatedAt: new Date()
          }], {});
      },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
