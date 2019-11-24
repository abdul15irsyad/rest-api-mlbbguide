'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
   */
    return queryInterface.bulkInsert('Heros', [
      {
        nama_hero: 'Akai',
        gambar_hero: null
      },
      {
        nama_hero: 'Aldous',
        gambar_hero: null
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Heros', null, {});
  }
};
