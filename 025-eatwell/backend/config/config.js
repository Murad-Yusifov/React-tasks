import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

export const connectDB = async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Databazaya baglandi");
    
   } catch (error) {
        console.log(error)
    
   }

}