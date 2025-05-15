import express from 'express'
import { apdatedtData, deleteBasket, getBasket, postBasket } from '../controllers/basketController.js'

const router = express.Router()


router
.get('/basket', getBasket)
.post('/basket', postBasket)
.delete('/basket/:id', deleteBasket)
.put('/basket/:id', apdatedtData)

export default router