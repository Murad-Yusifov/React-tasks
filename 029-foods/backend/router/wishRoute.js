import express from 'express'
import { deleteWish, getWish, postWish } from '../controllers/wishController.js'


const router = express.Router()

router
.get("/wish", getWish)
.post("/wish", postWish)
.delete("/wish", deleteWish)

export default router