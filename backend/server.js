import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js";
import workoutRouter from "./route/workoutRoutes.js"
dotenv.config();
const app = express();
connectDB();


// middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();

})

// routes
app.use("/api/workouts",workoutRouter);
app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`);
})