import mealModel from "../models/mealModel.js";

const getProduct = async (req, res)=>{
    const products = await mealModel.find()
    res.json(products)
    
}



const postProduct = async(req, res)=>{
    const {image, title,description, price} =req.body
    const product = {image, title,description, price}
    await mealModel.create(product)
    res.json(product)

}
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMeal = await mealModel.findByIdAndDelete(id);
        if (!deleteMeal) {
            return res.status(404).json({ message: `Məhsul ${id} tapılmadı.` });
        }
        res.json({ message: `${id} -li məhsul silindi.` });
    } catch (error) {
        res.status(500).json({ message: "Silmə zamanı xəta baş verdi.", error });
    }

    console.log(`Gelen id: ${id}`);
};




export {getProduct, postProduct, deleteProduct}