import basketModel from "../models/basketModel.js";



const getBasket = async (req, res)=>{
    const products = await basketModel.find()
    res.json(products)
    
}



const postBasket = async(req, res)=>{
    const {image, title,description, price} =req.body
    const product = {image, title,description, price}
    await basketModel.create(product)
    res.json(product)

}

const deleteBasket = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBasket = await basketModel.findByIdAndDelete(id);
        if (!deleteBasket) {
            return res.status(404).json({ message: `Məhsul ${id} tapılmadı.` });
        }
        res.json({ message: `${id} -li məhsul silindi.` });
    } catch (error) {
        res.status(500).json({ message: "Silmə zamanı xəta baş verdi.", error });
    }
};

export {getBasket, postBasket, deleteBasket}