'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: DataTypes.STRING,
    gambar_role: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.Hero_Role,{
      foreignKey:'roleId',
      as:'heroroles'
    });
  };
  return Role;
};