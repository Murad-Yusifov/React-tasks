import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true},
},{timestamps:true})

const productModel = mongoose.model('aroma', productSchema)

export default productModel