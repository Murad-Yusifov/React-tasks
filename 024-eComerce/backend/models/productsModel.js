import mongoose from "mongoose";


const productSchema =mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:String, required:true}
}, {timestamps:true})

const productModel =mongoose.model('product', productSchema)

export default productModel



