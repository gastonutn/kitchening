'use strict';
const seccionesArray = ['entradas','principales','desayunos','bebidas','postres'];
const seccionesDB = seccionesArray.map(categoria => {
  return {
    name: seccion,
    createdAdd: new Date,
    createdAdd: new Date,
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories', [{
      categoriasDB
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
