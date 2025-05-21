import express from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))

connectDB()

app.listen(5000,()=>{
    console.log('backend is running');
    
})