import mongoose from "mongoose"
import { configDotenv } from "dotenv";

configDotenv()

export const connectDB = async()=>{
    try {
       await  mongoose.connect(process.env.MONGO_URI)
       console.log("Databazaya qoshuldu");
       
        
    } catch (error) {
        console.log(error);
        console.error("Database əlaqəsi zamanı xəta:", error)
        
        
    }
}
