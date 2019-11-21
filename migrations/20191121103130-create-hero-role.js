'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hero_Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references:{
          model: 'Heros',
          key: 'id',
          as: 'HeroId'
        }
      },
      roleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete:'CASCADE',
        references:{
          model: 'Roles',
          key: 'id',
          as: 'RoleId'
        }
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hero_Roles');
  }
};