import express from 'express'
import { getProduct, postProduct } from '../controllers/meatController.js'

const router =express.Router()

router
.get('/meat', getProduct)
.post('/meat', postProduct)

export default router