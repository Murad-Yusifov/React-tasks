import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    image:{type:String, require:true},
    price:{type:Number, require:true}
}, {timestamps:true})

const productModel = mongoose.model('basket', productSchema)

export default productModel

