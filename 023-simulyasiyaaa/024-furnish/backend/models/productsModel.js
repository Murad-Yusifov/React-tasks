import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:{type:String, require:true},
    name:{type:String, require:true},
    title:{type:String, require:true}
}, {timestamps:true})

const ProductModel =mongoose.model('Products', productSchema)   

export default ProductModel