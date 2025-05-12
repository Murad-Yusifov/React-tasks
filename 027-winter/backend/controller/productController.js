import productModel from "../models/productModel.js"


const getProduct = async (req, res)=>{
    const products =await productModel.find()
    res.json(products)
}

const postProducts = async (req, res)=>{
    const {image}= req.body
    const product = {image}
    await productModel.create( product)
    res.json(product)
}


export {getProduct, postProducts}