// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Skill = require("../models/skill.js");


// Routes
// =============================================================
module.exports = function (app) {

  //Get all chirps
  app.get("/api/all", function (req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Skill.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  //Add a chirp
  app.post("/api/new", function (req, res) {

    console.log("Skill Data:");
    console.log(req.body);
   
    Skill.create({
      week: req.body.week,
      activity: req.body.activity,
      link: req.body.link,
      skill: req.body.skill

    }).then(function (results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};
