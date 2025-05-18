import mongoose from "mongoose";

const wishSechma = mongoose.Schema({
    image:{type:String, require:true},
    price:{type:Number, require:true}

}, {timestamps:true})

const wishModel= mongoose.model("wish", wishSechma)

export default wishModel