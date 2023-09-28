import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();


app.listen(5000,()=>{
    console.log(`Server started at port 5000`);
})