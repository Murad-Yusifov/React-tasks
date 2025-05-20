import mongoose from "mongoose";


const basketSchema = new mongoose.Schema({
  image:{type:String, require:true},
    title:{type:String, require:true},
    description:{type:String, require:true},
    price:{type:String, require:true}
}, {timestamps:true})

const basketModel =mongoose.model('basket', basketSchema)

export default basketModel



