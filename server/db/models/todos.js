const Sequelize = require("sequelize");
const db = require("../database");

module.exports = db.define("Todos", {
  todo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  dueDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    },
  },
  completionDate: {
    type: Sequelize.DATE,
    validate: {
      notEmpty: true,
    },
  },
});
