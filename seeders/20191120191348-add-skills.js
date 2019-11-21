'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Skills', [
      {
        nama_skill: "Tai Chi",
        deskripsi: "Setelah menggunakan Skill, Akai akan mendapatkan sebuah Shield yang dapat menyerap hingga 6% dari Max HP-nya. Berlangsung selama 2 detik. Efek dapat diaktifkan setiap 2.5 detik.",
        gambar_skill: null,
        heroId: 1
      },
      {
        nama_skill: "Thousand Pounder",
        deskripsi: "Akai melompat ke lokasi yang ditentukan. Pada saat mendarat, dia memberikan 300(+50% Total Physical ATK) Magic Damage kepada lawan, dan menyebabkan efek Slow kepada mereka sebesar 30% selama 2 detik. Ketika Akai memberikan Dama kepada lawan yang ditandai",
        gambar_skill: null,
        heroId: 1
      },
      {
        nama_skill: "Contract: Soul Steal",
        deskripsi: "Aldous Melepaskan energi dalamnya untuk memperkuat Basic Attack berikutnya, memberikan 100(+100%Total Physical ATK) Physical Damage. Jika serangan ini mengeliminasi Hero lawan atau unin Non-Hero, Aldous akan mendapatkan 10/2 Stack Soul Steal.",
        gambar_skill: null,
        heroId: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
