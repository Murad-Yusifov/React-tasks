import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    image:{type:String, require:true},
    title:{type:String, require:true},
    description:{type:String, require:true},
    price:{type:String, require:true},

}, {timestamps:true})

const ProductModel = mongoose.model(`product`, productSchema)

export default ProductModel