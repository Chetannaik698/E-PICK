import express from 'express'
import { geAllOrders, getUserOrders, placeOrder, updateOrderStatus } from '../controller/order.controller.js'
import { adminOnly, protect } from '../middleware/user.middleware.js'

const router = express.Router()

router.post("/", protect, placeOrder)
router.get("/", protect, getUserOrders)
router.get("/all", adminOnly, geAllOrders)

router.put("/:orderId", adminOnly, updateOrderStatus)

export default router