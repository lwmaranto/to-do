"use strict";

const db = require("./database");

const Todos = require("./models/todos");

module.exports = {
  // Include your models in this exports object as well!
  db,
  Todos,
};
