import express from 'express'
import {getBasket, deleteBasket, postBasket  } from '../controllers/basketController.js'

const router =express.Router()

router
.get('/baskets', getBasket)
.post('/baskets', postBasket)
.delete('/baskets/:id', deleteBasket)

export default router