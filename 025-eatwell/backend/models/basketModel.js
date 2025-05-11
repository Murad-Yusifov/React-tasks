import mongoose from "mongoose";


const basketSchema = new mongoose.Schema({
    items: [
       {
        image:String,
        title:String,
        description:String,
        price:Number
       }
    ]
}, {timestamps:true})

const basketModel =mongoose.model('basket', basketSchema)

export default basketModel



