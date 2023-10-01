import mongoose from "mongoose"


const workoutSchema  = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    reps:{
        type:Number,
        required:[true,"Reps is required"]
    },
    load:{
        type:Number,
        required:[true,"Load is required"]
    }
},{timestamps:true})


const Workout = mongoose.model("Workout",workoutSchema);
export default Workout;
