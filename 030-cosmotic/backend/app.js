import express from 'express'
import { connectDB } from './config/config.js';
import cors from 'cors'
import medicRouter from './router/medicRoute.js'

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors("*"))

app.use('/api', medicRouter )

connectDB()


app.listen(5000,()=>{
    console.log("Backend is running");
    
} )