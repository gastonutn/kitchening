'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user', [
      {
      name: 'admin',
      surname: "kitchening",
    email: "menaericdaniel@gmail.com",
      password: "$2a$10$khdNA1e5pfBwVikAUZE1.OwMw8gS27wnUDfMBA6OqO5IVv2jrwXMW",
      roleId: 1,
      isBetaMEnber: false
    },
    {
      name: 'user',
      surname: "kitchening",
    email: "menaericdaniel@gmail.com",
      password: "$2a$10$khdNA1e5pfBwVikAUZE1.OwMw8gS27wnUDfMBA6OqO5IVv2jrwXMW",
      roleId: 2,
      isBetaMEnber: false
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
