import express from 'express'
import cors from 'cors'
import productRouter from './routes/eiserRoute.js'
import { connectDB } from './config/config.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))

connectDB()

app.use('/', productRouter)

app.listen(5000, ()=>{
    console.log("Backend is running");
    
})