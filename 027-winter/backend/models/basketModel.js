import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    items: [
        {
            type:mongoose.Schema.Types.Mixed

        }

    ]


}, {timestamps:true})

const basketModel =mongoose.model('basket', basketSchema)

export default basketModel