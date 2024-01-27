const express = require('express')
const { create } = require('../models/WorkoutModel')
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout
} = require('../controllers/workoutControllers')
const router = express.Router()
// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// create a new workout
router.post('/', createWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)

module.exports= router