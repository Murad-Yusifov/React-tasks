import express from 'express'
import { deleteMedic, getMedic, postMedic } from '../controller/medicController.js'

const router = express.Router()

router
.get('/medic', getMedic)
.post('/medic', postMedic)
.delete('/medic', deleteMedic)

export default router