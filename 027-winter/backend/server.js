import express from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'
import ProductRouter from './router/productRouter.js'
import BasketRouter from './router/basketRouter.js'



const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))
app.use('/', ProductRouter )
app.use('/', BasketRouter )


connectDB()





app.listen(5000, ()=>{
    console.log("Backemnd is running")
})