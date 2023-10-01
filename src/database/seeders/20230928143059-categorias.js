'use strict';
const categoriasArray = ['carnes','pescados','pastas','bebidas','postres','sopas','guarniciones'];
const categoriasDB = categoriasArray.map(categoria => {
  return {
    name: categoria,
    createdAdd: new Date,
    createdAdd: new Date,
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories', [{
      categorias
     
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
