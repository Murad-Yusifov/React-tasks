import express from 'express'
import cors from "cors"
import { connectDB } from './config/config.js'
import ProductRouter from './router/productsRoute.js'

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))

app.use('/', ProductRouter)

app.listen(5000, ()=>{
    console.log('Backend is running')
})