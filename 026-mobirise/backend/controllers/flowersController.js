import flowersModel from "../models/flowersModel.js";

const getflower = async (req, res)=>{
    const flowers = await flowersModel.find()
    res.json(flowers)
    
}



const postflower = async(req, res)=>{
    const {image, title, price} =req.body
    const flower = {image, title, price}
    await flowersModel.create(flower)
    res.json(flower)

}
const deleteflower = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteFlower = await mealModel.findByIdAndDelete(id);
        if (!deleteFlower) {
            return res.status(404).json({ message: `Məhsul ${id} tapılmadı.` });
        }
        res.json({ message: `${id} -li məhsul silindi.` });
    } catch (error) {
        res.status(500).json({ message: "Silmə zamanı xəta baş verdi.", error });
    }

    console.log(`Gelen id: ${id}`);
};




export {getflower, postflower, deleteflower}