import express from "express"
import cors from "cors"
import { connectDB } from "./config/config.js"
import productRouter from "./router/flowersRoute.js"
import basketRouter from './router/basketRouter.js'


export const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors("*"))

connectDB()

app.use('/', productRouter)
app.use('/', basketRouter)

app.listen(5000, ()=>{
    console.log("Backend is running");
    
})