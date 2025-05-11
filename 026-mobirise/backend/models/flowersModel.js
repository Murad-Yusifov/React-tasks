import mongoose from "mongoose"

const flowersSchema = mongoose.Schema({
    image:{type:String, require:true},
    title:{type:String, require:true},
    price:{type:String, require:true},
}, {timestamps:true})

const flowersModel = mongoose.model("flowers", flowersSchema)

export default flowersModel