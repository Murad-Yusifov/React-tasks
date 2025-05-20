import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    image:{type:String},
    title:{type:String, required:true},
    price:{type:String, required:true},
}, {timestamps:true})

const basketModel = mongoose.model("basketMshop", basketSchema)

export default basketModel