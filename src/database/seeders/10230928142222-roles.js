'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('roles', [{
      name: 'Administrados',
      createdAt: new Date,
      updatedAt: new Date,
      
    },
    {
      name: 'usuarios',
      createdAt: new Date,
      updatedAt: new Date,
      
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
