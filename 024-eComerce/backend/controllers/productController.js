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
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: `Məhsul ${id} tapılmadı.` });
        }
        res.json({ message: `${id} -li məhsul silindi.` });
    } catch (error) {
        res.status(500).json({ message: "Silmə zamanı xəta baş verdi.", error });
    }

    console.log(`Gelen id: ${id}`);
};




export {getProduct, postProduct, deleteProduct}