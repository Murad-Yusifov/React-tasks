import express from 'express'
import { deletePro, getPro, postPro } from '../controllers/productController.js'

const router = express.Router()


router
.get('/product', getPro)
.post('/product', postPro)
.delete('/product/:id', deletePro)

export default router