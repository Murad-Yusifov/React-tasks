import basketModel from "../models/basketModel.js";



// Basketden melumatlari getirir.
const getBasket = async (req, res)=>{
   try {
     const basket = await basketModel.findOne()
    if(!basket) {
        return res.status(404).json({message:"Basket tapilmadi."})

    }
    res.json(basket.items)
    
   } catch (error) {
    res.status(500).json({message:"Basket melumatlari alinarken xeta bash verdi.", error})
error:error.message

    
   }

    
}


// Baskte melumat elave edir.   
const  postBasket= async(req, res)=>{
   try {
     const {image, title, price} =req.body
    const newItem = {image, title, price}

    let basket = await basketModel.findOne();  //mehsulu tapir
    if(!basket){
        // basket yoxdursa yenisini yaradir.
        basket =new basketModel({items:[newItem]})

    }else {
        // eger basket varsa movcud mehsulu elave edir.
        basket.items.push(newItem)
    }

    await basket.save();
    res.json(newItem)
    
   } catch (error) {
    res.status(500).json({message:"Melumat elave edilerken xeta bash verdi.", error})
    
   }

}


// Basketden mehsul silir.
const deleteBasket = async (req, res) => {
    try {
        const { id } = req.params;
        const basket = await basketModel.findOne();
        if (!basket) {
            return res.status(404).json({ message: `Məhsul tapılmadı.` });
        }

        // Mehsulu arrayden silir.
        res.json({message:`Item ${id} silindi.`})
    } catch (error) {
        res.status(500).json({ message: "Silmə zamanı xəta baş verdi.", error });
    }

    console.log(`Gelen id: ${id}`);
};




export {getBasket, postBasket, deleteBasket}