import mongoose from "mongoose";
import Workout from "../model/workoutModel.js";

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

const createWorkout = async (req, res) => {
  try {
    const emptyFields = [];
    const {title,reps,load} = req.body;

    if(!title){
      emptyFields.push('title');
    }
    if(!reps){
      emptyFields.push('reps');
    }
    if(!load){
      emptyFields.push('load');
    }
    if(emptyFields.length > 0){
      return res.status(400).json({error:"Please Fill All Fields",emptyFields});
    }
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};
const getWorkout = async (req, res) => {
  try {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:"not a valid ID"});
    }
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error:"no such workout"});
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

const updateWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workout = await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"not a valid ID"});
    }
    const workout = await Workout.findByIdAndDelete(id);
    // console.log(workout);
    res.json(workout);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

export {
  getAllWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
