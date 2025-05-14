import basketModel from "../models/basketModel.js"


const getBasket = async (req, res)=>{
    const products = await basketModel.find()
    res.json(products)
}

const postBasket = async (req, res)=>{
    const {image, price}= req.body
    const product = {image, price}
    await basketModel.create(product)
    res.json(product)
}

const deleteBasket = async (req,res)=>{
    try {
        const {id}= req.params
        const deleteAll =await basketModel.findByIdAndDelete(id)
        if(!deleteAll) {
            return res.status(404).json({message: `Mehsul ${id}-li tapilmadi.`})
        }
        res.json({message:`${id}-li data silindi`})
        
    } catch (error) {
        res.status(500).json({message:"Silinme zamani xeta bash verdi", error})
        
    }

    console.log(`Gelen id|: ${id}`);
    
}

export {getBasket, postBasket, deleteBasket}