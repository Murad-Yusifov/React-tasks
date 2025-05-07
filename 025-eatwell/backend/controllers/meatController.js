import meatModel from "../models/meatModel.js";

const getProduct = async (req, res)=>{
    const products = await meatModel.find()
    res.json(products)
    
}



const postProduct = async(req, res)=>{
    const {image, title,description, price} =req.body
    const product = {image, title,description, price}
    await meatModel.create(product)
    res.json(product)

}

export {getProduct, postProduct}