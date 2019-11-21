'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    nama_skill: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar_skill: DataTypes.STRING
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
    Skill.belongsTo(models.Hero,{
      foreignKey:'heroId',
      onDelete:'CASCADE'
    });
  };
  return Skill;
};