import mongoose from 'mongoose'

const medicSchema =mongoose.Schema({
    image:{type:String,require:true},
    name:{type:String,require:true},
    price:{type:String,require:true},
}, {timestamps:true})

const medicModel = mongoose.model('medic', medicSchema)

export default medicModel