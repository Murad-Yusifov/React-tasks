import express from 'express'
import { getProduct, postProduct, deleteProduct } from '../controllers/productController.js'

const router =express.Router()

router
.get('/products', getProduct)
.post('/products', postProduct)
.delete('/products', deleteProduct)

export default router