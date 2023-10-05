'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
      name: 'admin',
      surname: "kitchening",
      email: "gaston.miguel.gomez@gmail.com",
      password: "$2a$10$khdNA1e5pfBwVikAUZE1.OwMw8gS27wnUDfMBA6OqO5IVv2jrwXMW",
      roleId: 1,
      birthday: null,
      createdAt: new Date,
      updatedAt: new Date,
      
    },
    {
      name: 'user',
      surname: "kitchening",
      email: "user@gmail.com",
      password: "$2a$10$khdNA1e5pfBwVikAUZE1.OwMw8gS27wnUDfMBA6OqO5IVv2jrwXMW",
      roleId: 2,
      birthday: null,
      createdAt: new Date,
      updatedAt: new Date,
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
