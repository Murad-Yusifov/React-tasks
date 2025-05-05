import ProductModel from "../models/productModel.js";


const getPro = async(req, res)=>{
    const products = await ProductModel.find()
    res.json(products)
  
}


const postPro = async(req, res)=>{
    const {image, title, price}=req.body
    const product ={image, title, price}
    await ProductModel.create(product)
    res.json(product)
}


const deletePro = async(req, res)=>{
    const {id}=req.params
    await ProductModel.findByIdAndDelete(id)
    res.sjon(`${id}-li mehsul silindi`)
}

export {getPro, postPro, deletePro}