import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.MONGO_URI)
        console.log("Databazaya qoshuldu");
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}

// MONGO_URI=mongodb+srv://murad123:CtsR6UXRTl9kpnzl@cluster0.vrcdp0u.mongodb.net/
