import basketModel from "../models/basketModel.js"

const getBasket =async(req,res)=>{
    const basket = await basketModel.find()
    res.json(basket)
}

const postBasket = async(req, res)=>{
    try {
        const {image,title, price} =req.body
    const basket ={image,title, price}
    await basketModel.create(basket)
    res.json(basket)
    const createdBasket = await basketModel.create(basket);
     console.log("Yaradılmış basket:", createdBasket);
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

const deleteBasket = async(req, res)=>{
    try {
        const {id} = req.params;
        const deleteBasket =await basketModel.findByIdAndDelete(id)
        if(!deleteBasket) {
            return res.status(404).json({message:`Mehsul ${id}-li data dapilmadi`})
        }
        res.json({message:`${id}-li mehsul silindi`})
        
    } catch (error) {
        res.status(500).json({message:"Silinme zamani xeta bash verdi"})
        console.log(error)
        
    }
    console.log(`Gelen id: ${req.params.id}`);``
    
}

export {getBasket, postBasket, deleteBasket}