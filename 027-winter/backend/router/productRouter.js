import express from "express"
import { getProduct, postProducts } from "../controller/productController.js"

const router =express.Router()

router
.get('/product', getProduct)
.post('/product', postProducts)

export default router