'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_skill: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deskripsi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      gambar_skill: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
        allowNull: false,
        type: Sequelize.DATE
      },
      heroId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references:{
          model: 'Heros',
          key: 'id',
          as: 'HeroId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Skills');
  }
};