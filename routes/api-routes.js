module.exports = function(app) {
    const db = require("./models");

    app.get("/api/workouts", (req, res) => {
        db.Note.find({})
          .then(dbNote => {
            res.json(dbNote);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.put("/api/workouts", (req, res) => {
        db.Note.find({})
          .then(dbNote => {
            res.json(dbNote);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.post("/api/workouts", (req, res) => {
        db.Note.find({})
          .then(dbNote => {
            res.json(dbNote);
          })
          .catch(err => {
            res.json(err);
          });
      });  

      app.get("/api/workouts/range", (req, res) => {
        db.Note.find({})
          .then(dbNote => {
            res.json(dbNote);
          })
          .catch(err => {
            res.json(err);
          });
      });  
};