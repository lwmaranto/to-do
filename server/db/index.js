"use strict";

const db = require("./database");

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')
const Todos = require("./models/todos");
//require("./models");

module.exports = {
  // Include your models in this exports object as well!
  db,
  Todos,
};
