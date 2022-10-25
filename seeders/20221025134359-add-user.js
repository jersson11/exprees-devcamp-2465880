'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
        {
       name: 'Jersson ovalle',
       correo: 'Jerssonovalle2gmail.com',
       password: '12345',
      },

      {
        name: 'cristian',
        correo: 'cristianbuitrago2gmail.com',
        password: '12345',
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
