const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration: {
    type: Number,
    default: 0,
    required:true
  },
  
  exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "String is Required"
        },
      
        type: {
          type: String,
          trim: true,
          required: "String is Required"
        },
      
        weight: {
          type: Number
        },
      
        reps: {
          type: Number
        },
      
        sets: {
          type: Number
        },
      
        duration: {
          type: Number,
          required: true
        },
      
        distance: {
          type: Number
        }
      }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;