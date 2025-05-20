import express from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'
import productRouter from './router/productRoute.js'
import basketRouter from './router/basketRouter.js'



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))

app.use('/', productRouter)
app.use('/', basketRouter)

connectDB()

const PORT =5000

app.listen(5000, ()=>{
    console.log("Backend is running");
    
})
