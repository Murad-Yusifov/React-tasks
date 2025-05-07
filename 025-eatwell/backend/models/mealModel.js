import mongoose from "mongoose";


const mealSchema =mongoose.Schema({
    image:{type:String, require:true},
    title:{type:String, require:true},
    description:{type:String, require:true},
    price:{type:String, require:true}
}, {timestamps:true})

const mealModel =mongoose.model('meals', mealSchema)

export default mealModel



