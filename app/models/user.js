'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here untuk tempat relasinya
      this.belongsToMany(db.role, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
    }
  }
  User.init({ //untuk variabel kolomnya
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};