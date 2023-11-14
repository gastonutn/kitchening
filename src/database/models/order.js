'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user,{
        as: 'user',
        foreignKey : 'userId'
      })


      order.hasMany(models.item,{
        as: 'item',
        foreignKey:'orderId'
      })

    }
  }
  order.init({
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};