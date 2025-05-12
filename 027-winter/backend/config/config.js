import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'


configDotenv()

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Databazaya baglandi");
        
        
    } catch (error) {
        console.log(error)
        
    }
}

