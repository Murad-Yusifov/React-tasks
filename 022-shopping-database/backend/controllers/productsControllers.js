import ProductModel from "../models/productsModel.js";

const getProducts =async(req, res)=>{
    const products =await ProductModel.find()
    res.json(products)
}

const postProducts = async (req, res) => {
    try {
        const { image, title, description, price } = req.body;
        console.log(req.body);

        const product = { image, title, description, price };
        const newProduct = await ProductModel.create(product);
        
        res.status(201).json(newProduct); // Response göndərin
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // İstəkdən ID-ni alırıq
        const product = await ProductModel.findByIdAndDelete(id); // ID ilə silmə əməliyyatı

        if (!product) {
            return res.status(404).json({ message: "Product tapilmadi" });
        }

        res.status(200).json({ message: `${id} -li product silindi` });
    } catch (error) {
        res.status(500).json({ message: "Server səhvi", error });
    }
};
   
  const putProduct = async (req,res)=>{
    try {
        const {id}=req.params
        const product =res.body

        const newProduct = await ProductModel.findByIdAndUpdate(id,product, {
            new:true,
            runValidators:true
        })
        if(!newProduct) {
            // return 
            res.status(404).json({message:"Product not found"})
        }
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
  }



export {getProducts, postProducts, deleteProduct,putProduct}
