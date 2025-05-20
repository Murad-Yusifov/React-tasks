import { configDotenv } from "dotenv";
import mongoose from "mongoose";


configDotenv()


export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Databazaya qoshuldu");
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}