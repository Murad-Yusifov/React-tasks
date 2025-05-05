import express from 'express'
import cors from 'cors'
import ProductRouter from "./router/productRouter.js"
import { connectDB } from './config/config.js'


const app = express()

connectDB()

app.use(express.json())
app.use(cors('*'))
app.use(express.urlencoded({extended:true}))
app.use('/', ProductRouter)

app.listen(5000, ()=>{
    console.log("Backend is running")
})