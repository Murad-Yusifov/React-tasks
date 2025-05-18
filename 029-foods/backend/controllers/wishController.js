import wishModel from "../models/wishModel.js";

const getWish= async (req, res) => {
    const products = await wishModel.find();
    res.json(products);
};

const postWish= async (req, res) => {
    const { image, price } = req.body;
    const product = { image, price };
    await wishModel.create(product);
    res.json(product);
};

const deleteWish= async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAll = await wishModel.findByIdAndDelete(id);
        if (!deleteAll) {
            return res.status(404).json({ message: `Mehsul ${id}-li tapilmadi.` });
        }
        res.json({ message: `${id}-li data silindi` });
    } catch (error) {
        res.status(500).json({ message: "Silinme zamani xeta bash verdi", error });
    }
};


export {getWish, postWish, deleteWish}