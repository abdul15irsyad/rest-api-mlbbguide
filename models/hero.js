'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    nama_hero: DataTypes.STRING,
    gambar_hero: DataTypes.STRING
  }, {});
  Hero.associate = function(models) {
    // associations can be defined here
    Hero.hasMany(models.Skill,{
      foreignKey:'heroId',
      as:'skills'
    });
    Hero.hasMany(models.Hero_Role,{
      foreignKey:'heroId',
      as:'heroroles'
    });
  };
  return Hero;
};