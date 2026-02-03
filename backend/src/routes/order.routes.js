import express from 'express'
import { placeOrder } from '../controller/order.controller.js'
import { protect } from '../middleware/user.middleware.js'

const router = express.Router()

router.post("/", protect, placeOrder)

export default router