import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// GET /gifts - return all gifts as JSON from database
router.get('/', GiftsController.getGifts)

// GET /gifts/:giftId - serve the gift detail HTML page
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router
