import ProductModel from "../models/productsModel.js";

const getProducts = async (req, res)=>{
    const products = await ProductModel.find()
    res.json(products)
}

const postProduct = async (req, res)=>{
    const {image, name, title} =req.body
    const product = {image, name, title}
    await ProductModel.create(product)
    res.json(product)
}

const deleteproduct = async (req, res)=>{
    const {id}=req.params
    await ProductModel.findByIdAndDelete(id)
    res.json(`${id}-li data silindi`)
}

export {getProducts, postProduct, deleteproduct}

