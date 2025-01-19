"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("linkers", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("linkers", "voto_up", {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
    await queryInterface.addColumn("linkers", "voto_down", {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
    await queryInterface.addColumn("linkers", "total_voto", {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("linkers", "deletedAt");
    await queryInterface.removeColumn("linkers", "voto_up");
    await queryInterface.removeColumn("linkers", "voto_down");
    await queryInterface.removeColumn("linkers", "total_voto");
  },
};
