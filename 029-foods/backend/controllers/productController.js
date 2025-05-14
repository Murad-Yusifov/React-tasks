import productModel from "../models/productModel.js"


const getPro = async (req, res)=>{
    const products = await productModel.find()
    res.json(products)
}

const postPro = async (req, res)=>{
    const {image, price}= req.body
    const product = {image, price}
    await productModel.create(product)
    res.json(product)
}

const deletePro = async (req,res)=>{
    try {
        const {id}= req.params
        const deleteAll =await productModel.findByIdAndDelete(id)
        if(!deleteAll) {
            return res.status(404).json({message: `Mehsul ${id}-li tapilmadi.`})
        }
        res.json({message:`${id}-li data silindi`})
        
    } catch (error) {
        res.status(500).json({message:"Silinme zamani xeta bash verdi", error})
        
    }

    console.log(`Gelen id|: ${id}`);
    
}

export {getPro, postPro, deletePro}