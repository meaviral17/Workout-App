const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')
// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get a single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No workout with that id')
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json('No workout with that id')
    }
}

// create a new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body
    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No workout with that id')
    }
    const workout = await Workout.findByIdAndDelete({_id: id})
    if(!workout){
        return res.status(400).json('No workout with that id')
    }
    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json('No workout with that id')
    }
    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(400).json('No workout with that id')
    }
    res.status(200).json(workout)

}


module.exports = {
    createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout
}