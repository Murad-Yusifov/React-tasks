import express from 'express'
import { getProducts, postProducts, deleteProduct } from '../controllers/productsControllers.js'

const router = express.Router()

router
.get('/products', getProducts)
.post('/products', postProducts)
.delete('/products/:id', deleteProduct)

export default router