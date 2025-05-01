import mongoose from "mongoose";

const productSchema =mongoose.Schema({
    image:{type:String, require:true},
    title:{type:String, require:true},
    description:{type:String, require:true},
}, {timestamps:true})

const BookModel = mongoose.model('Products', productSchema)

export default  BookModel