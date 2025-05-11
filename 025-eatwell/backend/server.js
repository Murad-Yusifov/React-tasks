import express from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'
import MealRouter from './router/mealRouter.js'
import MeatRouter from './router/meatRoute.js'
import basketRoute from './router/basketRoute.js'



const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))

app.use('/', MealRouter)
app.use('/', MeatRouter)
app.use('/', basketRoute)




app.listen(5000, ()=>{
    console.log("Backemnd is running")
})