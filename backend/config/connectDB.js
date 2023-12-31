import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected :${conn.connection.name}`);
    }catch(error){
        console.log(error.message);
    }

}

export default connectDB;