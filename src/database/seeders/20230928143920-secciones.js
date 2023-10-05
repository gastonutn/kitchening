'use strict';
const seccionesArray = ['entradas','platos principales','cafeteria','ensaladas','bebidas','postres','vinos'];
const seccionesDB = seccionesArray.map(seccion => {
  return {
    name: seccion,
    createdAt: new Date,
    updatedAt: new Date,
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('sections', 
    seccionesDB,
       {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sections', null, {});

  }
};
