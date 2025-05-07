import express from 'express'
import { getProduct, postProduct, deleteProduct } from '../controllers/mealController.js'

const router =express.Router()

router
.get('/meals', getProduct)
.post('/meals', postProduct)
.delete('/meals/:id', deleteProduct)

export default router