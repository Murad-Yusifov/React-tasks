import express from 'express'
import { deleteProduct, getProduct, postProduct } from '../controllers/eiserController.js'

const router =express.Router()

router
.get('/eiser', getProduct)
.post('/eiser',postProduct)
.delete('/eiser/:id',deleteProduct)

export default router