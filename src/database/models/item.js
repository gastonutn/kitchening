'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.order,{
        as: 'order',
        foreignKey:'orderId'
      })

      item.belongsTo(models.Product,{
        as:'product',
        foreignKey: 'productId'
      })
    }
  }
  item.init({
    quantity: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};