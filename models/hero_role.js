'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero_Role = sequelize.define('Hero_Role', {
    heroId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  Hero_Role.associate = function(models) {
    // associations can be defined here
    Hero_Role.belongsTo(models.Hero,{
      foreignKey:'heroId',
      onDelete:'CASCADE'
    });

    Hero_Role.belongsTo(models.Role,{
      foreignKey:'RoleId',
      onDelete:'CASCADE'
    });
  };
  return Hero_Role;
};