import mongoose from "mongoose";


const basketSchema = new mongoose.Schema({
    items: [
      {
        type:mongoose.Schema.Types.Mixed,
      }
    ]
}, {timestamps:true})

const basketModel =mongoose.model('baskets', basketSchema)

export default basketModel



