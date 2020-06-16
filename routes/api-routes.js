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
           //Going through the workout and finding the duration of each exercise and adding together to get total duration(td)
           let td =0;
           dbWorkout.exercises.forEach(exercise => td+= exercise.duration)
            db.Workout.findOneAndUpdate({_id: req.params.id},{$set: {totalDuration:td} }, { new: true})
            .then(dbWorkout => {
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
      
      //Gets workout data
      app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });       
};