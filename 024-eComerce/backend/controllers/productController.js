import productModel from "../models/productsModel.js";

const getProduct = async (req, res)=>{
    const products = await productModel.find()
    res.json(products)
}

const postProduct = async(req, res)=>{
    const {image, title, price} =req.body
    const product = {image, title, price}
    await productModel.create(product)
    res.json(product)

}

const deleteProduct = async (req, res)=>{
    const {id}=req.params
    await productModel.findByIDAndDelete(id)
    res.json(`${id} -li product silinidi`)
}

export {getProduct, postProduct, deleteProduct}