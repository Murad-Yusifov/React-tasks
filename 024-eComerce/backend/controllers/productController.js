import productModel from "../models/productsModel.js";

const getProduct = async (req, res) => {
    try {
        const products = await productModel.find();
        console.log("Fetched products:", products); // Log
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error); // Log
        res.status(500).json({ error: "Server error" });
    }
};


const postProduct = async (req, res) => {
    try {
        const { image, title, price } = req.body;
        const product = { image, title, price };
        const createdProduct = await productModel.create(product);
        console.log("Product created:", createdProduct); // Log
        res.json(createdProduct);
    } catch (error) {
        console.error("Error creating product:", error); // Log
        res.status(500).json({ error: "Server error" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productModel.findByIdAndDelete(id);
        console.log(`Product deleted with ID: ${id}`); // Log
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: `Product with ID ${id} deleted` });
    } catch (error) {
        console.error("Error deleting product:", error); // Log
        res.status(500).json({ error: "Server error" });
    }
};


export {getProduct, postProduct, deleteProduct}