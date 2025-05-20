import mongoose from "mongoose"

const flowersSchema = mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true},
}, {timestamps:true})

const flowersModel = mongoose.model("flowers", flowersSchema)

export default flowersModel