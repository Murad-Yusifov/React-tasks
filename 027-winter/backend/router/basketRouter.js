import express from "express"
import { getBasket, postBasket } from "../controller/basketController.js"

const router =express.Router()

router
.get('/basket', getBasket)
.post('/basket', postBasket)

export default router