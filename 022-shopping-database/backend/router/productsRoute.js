import express from 'express'
import { getProducts, postProducts, deleteProduct, putProduct} from '../controllers/productsControllers.js'

const router = express.Router()

router
.get('/products', getProducts)
.post('/products', postProducts)
.put('/products', putProduct)
.delete('/products/:id', deleteProduct)

export default router