import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3000

// Global middlewares
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

//Main
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'HoaKuro Game Store API v1.0.0',
    author: 'Yuki dev',
    swagger: '/swagger'
  })
})

// Health‑check
app.get('/', (_req, res) => {
  res.send('🔥 Server is up and running!')
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
