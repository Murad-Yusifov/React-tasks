import BookModel from "../models/productsModel.js"

const getProducts = async (req, res)=>{
    const books = await BookModel.find()
    res.json(books)
}


const postProduct = async (req, res)=>{
    const {image, title, description}=req.body
    const book = {image, title, description}
    await BookModel.create(book)
    res.json(book)
}


const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await BookModel.findByIdAndDelete(id);
        if (deletedBook) {
            res.json(`${id} -li kitab silindi`);
        } else {
            res.status(404).json("Kitab tapılmadı");
        }
    } catch (error) {
        res.status(500).json("Serverdə xəta baş verdi");
    }
};



export { getProducts, postProduct, deleteProduct}