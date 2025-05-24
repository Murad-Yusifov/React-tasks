import express from 'express'
import { deleteProducts, getProduct, postProduct, putProduct } from '../controllers/productController.js'


const router = express.Router()

router
.get('/products', getProduct )
.post('/products', postProduct )
.delete('/products/:id', deleteProducts )
.put('/products/:id', putProduct )


export default router