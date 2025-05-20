import productModel from "../models/eiserModel.js"


const getProduct =async(req, res)=>{
    const products = await productModel.find()
    res.json(products)
}

const postProduct = async(req, res)=>{
    const {image, title, price}= req.body
    const products = {image, title, price}
    await productModel.create(products)
    res.json(products)


}

const deleteProduct = async(req, res)=>{
    try {
        const {id} =req.params
        const deleteAll =await productModel.findByIdAndDelete(id)
        if(!deleteAll){
            return res.status(404).json({message:`Mehsul ${id}-li data tapilmadi.`})
        }
        res.status(500).json({message:`Mehsuln ${id}-li data silindi`})
        
    } catch (error) {
        res.status(500).json({message:'Silinme zamani xeta bash verdi', error})
        
    }
}

export {getProduct, postProduct, deleteProduct}