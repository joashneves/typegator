'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('linkers', [{
      titulo: 'typegator',
      descricao: 'Repositorio do projeto',
      link: 'https://github.com/joashneves/typegator',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: 'perfil do joas',
      descricao: 'perfil do github do joashneves',
      link: 'https://github.com/joashneves',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      titulo: 'site joashneves',
      descricao: 'Site do joashneves',
      link: 'https://joashneves.me',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('linkers', null, {});
     
  }
};
