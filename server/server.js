import express from 'express'
import cors from 'cors'
import './config/dotenv.js'
import giftsRouter from './routes/gifts.js'

const app = express()

app.use(cors())

// Root route - API status
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Gifts routes
app.use('/gifts', giftsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
