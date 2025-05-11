import express from 'express'
import { getflower, postflower, deleteflower } from '../controllers/flowersController.js'

const router =express.Router()

router
.get('/flowers', getflower)
.post('/flowers', postflower)
.delete('/flowers/:id', deleteflower)

export default router