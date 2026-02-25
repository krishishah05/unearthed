import express from 'express'
import giftsRouter from './routes/gifts.js'

const app = express()

// Serve static files from the built client output
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use(express.static('./public'))

// Root route - API status
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Gifts routes
app.use('/gifts', giftsRouter)

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: './public' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
