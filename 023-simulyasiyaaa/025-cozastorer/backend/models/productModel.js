import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:{type:String,require:true},
    title:{type:String,require:true},
    price:{type:String,require:true},
}, {timestamps:true})

const ProductModel = mongoose.model('Product', productSchema)

export default ProductModel