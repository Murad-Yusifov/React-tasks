import ProductModel from "../models/productsModel.js";

const getProducts =async(req, res)=>{
    const products =await ProductModel.find()
    res.json(products)
}

const postProducts =async (req, res)=>{
    const {image, title, description, price } = req.body
    console.log(req.body)

        const product = {image, title, description, price }
        await ProductModel.create(product)    
}
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
export {getProducts, postProducts, deleteProduct}
