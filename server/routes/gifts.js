import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

// GET /gifts - return all gifts as JSON from database
router.get('/', GiftsController.getGifts)

// GET /gifts/:giftId - return a single gift by ID as JSON
router.get('/:giftId', GiftsController.getGiftById)

export default router
