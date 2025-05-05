import express from 'express'
import { getPro, postPro, deletePro } from "../controllers/productController.js";

const router = express.Router()


router
.get('/products',getPro)
.post('/products',postPro)
.delete('/products',deletePro)


export default router
