import express from 'express'
import { deleteProduct, postProduct, getProducts } from '../controllers/productsController.js'

const router = express.Router()

router
.get('/products', getProducts)
.post('/products', postProduct)
.delete('/products/:id', deleteProduct)

export default router