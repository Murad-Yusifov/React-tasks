import medicModel from "../Models/medicModel.js"

const getMedic = async(req, res)=>{
    const products = await medicModel.find()
    res.json(products)
}

const postMedic = async(req, res)=>{
    try {
         const {image, name, price}=req.bodey
        console.log(req.bodey);

        const product = {image, name, price}
        const newProduct =await medicModel.create(product)

        res.status(201).json(newProduct)
        
    } catch (error) {
        console.log(error);  
    }
}

const deleteMedic = async(req,res)=>{
    try {
        const {id} = req.params
        const products = await medicModel.findByIdAndDelete(id)

        if(!products) {
            return res.status(404).json({message:'Product tapilmadi'})
        }
        req.status(200).json({message:`${id}-li data silindi`})
        
    } catch (error) {
        res.status(500).json({message:"Server sehvi", error})
        
    }
}

export {getMedic, postMedic, deleteMedic}