import express from 'express'
import { getUserOrders, placeOrder } from '../controller/order.controller.js'
import { protect } from '../middleware/user.middleware.js'

const router = express.Router()

router.post("/", protect, placeOrder)
router.get("/", protect, getUserOrders)

export default router