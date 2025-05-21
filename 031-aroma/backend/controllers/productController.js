import productModel from "../models/productModel"




const getProduct = async(req,res)=>{
    const products = await productModel.find()
    res.json(products)
}

const postProduct = async(req, res)=>{
    const {image, title, price}=req.body
    const products ={image, title, price}
    await productModel.create(products)
}

const deleteProducts = async(req, res)=>{
    try {
        const {id}=req.params
        const deleteProducts = await productModel.findByIdAndDelete(id)
        if(!deleteProducts){
            return res.status(404).json({message:`Mehsul ${id}-li data tapilmadi`})
        }
        res.json({message:`${id}-li data silindi`})
        
    } catch (error) {
        res.status(500).json({message:'SIlme zamani xeta bash verdi', error})
        
    }
}

const putProduct = async (req, res)=>{
  try {
      const {id} = req.params
    const {image, title, price}= req.body
    if(!image || !title || !price) {
        return res.status(400).json({message:'Bwtwn melumatlari temin edin'})
    }
    const updateProduct =await productModel.findByIdAndUpdate(id, {image, title, price}, {new:true})
    if(!updateProduct) {
        return res.status(404).json({message:`${id}-li data tapilmadi`})
    }
    res.json(updateProduct)
    
  } catch (error) {
    console.log(error);
    
    
  }
}