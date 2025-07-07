'use strict';

const playerTableName = 'Players';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(playerTableName, [
      { name: 'Huma', score: 90 },
      { name: 'Neha', score: 20 },
      { name: 'Romaisa', score: 10 },
      { name: 'Areeba', score: 40 },
      { name: 'Hania', score: 50 }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(playerTableName, null, {});
  }
};
