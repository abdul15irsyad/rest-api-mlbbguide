'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Roles', [
      {
        role: 'Assasin',
        gambar_role: null
      },{
        role: 'Fighter',
        gambar_role: null
      },{
        role: 'Mage',
        gambar_role: null
      },{
        role: 'Marksman',
        gambar_role: null
      },{
        role: 'Support',
        gambar_role: null
      },{
        role: 'Tank',
        gambar_role: null
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
