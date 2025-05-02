import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

export const connectDB = async ()=>{
    try {
        const coonnect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`databazaya qoshuldu`)
        
    } catch (error) {
        console.log(error)
        
    }
}
