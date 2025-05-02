import express from 'express'
import { getProducts, postProduct, deleteproduct } from '../controllers/productsController.js'

const router = express.Router()

router
.get('/', getProducts)
.post('/', postProduct)
.delete('/:id', deleteproduct)

export default router