import express from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'
import productRouter from './routes/productRoute.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))

app.use('/', productRouter)

connectDB()

app.listen(5000,()=>{
    console.log('backend is running');
    
})