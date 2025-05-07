import mongoose from "mongoose";


const meatSchema =mongoose.Schema({
    image:{type:String, require:true}
}, {timestamps:true})

const meatModel =mongoose.model('meat', meatSchema)

export default meatModel
