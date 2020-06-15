const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;