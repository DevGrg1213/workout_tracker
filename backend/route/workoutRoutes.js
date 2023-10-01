import express from "express"
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkout, updateWorkout } from "../controller/workoutController.js";

const router = express.Router();

router.get('/',getAllWorkouts)

router.post('/',createWorkout)

router.get('/:id',getWorkout)

router.patch("/:id",updateWorkout)

router.delete('/:id',deleteWorkout)




export default router;