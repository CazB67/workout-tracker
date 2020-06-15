module.exports = function(app) {
    let db = require("../models");

    //Find all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });

      //Assigning exercises to the workout
      app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body + " ID " + req.params.id);   
        db.Workout.findOneAndUpdate({_id: req.params.id},{$push: {exercises: req.body} }, { new: true})
          .then(dbWorkout => {
           let td =0;
            console.log(dbWorkout.exercises[0].duration);
            for(let i=0; i<dbWorkout.exercises.length; i++){
              td = td + dbWorkout.exercises[i].duration 
              console.log("dddddddddd" + td);
            }
            db.Workout.findOneAndUpdate({_id: req.params.id},{$set: {totalDuration:td} }, { new: true})
            .then(dbWorkout => {
              console.log(dbWorkout + "lkjhgf");
            res.json(dbWorkout);
            })
          })
          .catch(err => {
            res.json(err);
          });
      });

      //Create workout
      app.post("/api/workouts", (req, res) => {
        db.Workout.create({req})
        .then(dbWorkout => {
          res.json(dbWorkout);
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