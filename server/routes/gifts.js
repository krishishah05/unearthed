import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

// GET /gifts - return all gifts as JSON from database
router.get('/', GiftsController.getGifts)

// GET /gifts/:giftId - return a single gift by ID as JSON
router.get('/:giftId', GiftsController.getGiftById)

// POST /gifts - create a new gift
router.post('/', GiftsController.createGift)

// DELETE /gifts/:id - delete a gift by ID
router.delete('/:id', GiftsController.deleteGift)

// PATCH /gifts/:id - update a gift by ID
router.patch('/:id', GiftsController.updateGift)

export default router
