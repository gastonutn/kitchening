'use strict';
const categoriasArray = ['carnes rojas','pescados y mariscos','pastas','sopas','guarniciones','desayunos y meriendas','bebidas' ];
const categoriasDB = categoriasArray.map(categoria => {
  return {
    name: categoria,
    createdAt: new Date,
    updatedAt: new Date,
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories', 
      categoriasDB,
      {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
