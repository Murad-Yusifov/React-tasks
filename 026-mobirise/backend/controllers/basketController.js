import basketModel from "../models/basketModel.js";

const getBasket = async (req, res)=>{
    const flowers = await basketModel.find()
    res.json(flowers)
    
}



const  postBasket= async(req, res)=>{
    const {image, title, price} =req.body
    const flower = {image, title, price}
    await basketModel.create(flower)
    res.json(flower)

}
const deleteBasket = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteFlower = await basketModel.findByIdAndDelete(id);
        if (!deleteFlower) {
            return res.status(404).json({ message: `Məhsul ${id} tapılmadı.` });
        }
        res.json({ message: `${id} -li məhsul silindi.` });
    } catch (error) {
        res.status(500).json({ message: "Silmə zamanı xəta baş verdi.", error });
    }

    console.log(`Gelen id: ${id}`);
};




export {getBasket, postBasket, deleteBasket}