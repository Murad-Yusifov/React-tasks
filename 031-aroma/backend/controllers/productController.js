import productModel from "../models/productModel.js";

// Get all products
const getProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Məhsulları götürərkən xəta baş verdi", error });
    }
};

// Create a new product
const postProduct = async (req, res) => {
    try {
        const { image, title, price } = req.body;
        if (!image || !title || !price) {
            return res.status(400).json({ message: "Bütün məlumatları təmin edin" });
        }
        const product = { image, title, price };
        const createdProduct = await productModel.create(product);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: "Məhsul yaradılarkən xəta baş verdi", error });
    }
};

// Delete a product
const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: `Məhsul ${id}-li data tapılmadı` });
        }
        res.json({ message: `${id}-li data silindi` });
    } catch (error) {
        res.status(500).json({ message: "Silinmə zamanı xəta baş verdi", error });
    }
};

// Update a product
const putProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, title, price } = req.body;
        if (!image || !title || !price) {
            return res.status(400).json({ message: "Bütün məlumatları təmin edin" });
        }
        const updatedProduct = await productModel.findByIdAndUpdate(id, { image, title, price }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: `${id}-li data tapılmadı` });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Yenilənmə zamanı xəta baş verdi", error });
    }
};

export { getProduct, postProduct, deleteProducts, putProduct };
