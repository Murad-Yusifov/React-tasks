import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
  image:{type:String, require:true}
},
  { timestamps: true }
);

const basketModel = mongoose.model("basket", basketSchema);

export default basketModel;
