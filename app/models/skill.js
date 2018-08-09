// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Skill = sequelize.define("skill", {
  week: Sequelize.INTEGER,
  activity: Sequelize.STRING,
  link: Sequelize.STRING,
  skill: Sequelize.STRING
});

// Syncs with DB
Skill.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Skill;
