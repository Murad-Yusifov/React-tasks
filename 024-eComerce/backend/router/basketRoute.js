import express from 'express'
import { deleteBasket, getBasket, postBasket } from '../controllers/basketController.js'

const router = express.Router()

router
.get('/basket', getBasket)
.post('/basket', postBasket)
.delete('/basket/:id', deleteBasket)

export default router