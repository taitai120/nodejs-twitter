import express from 'express'

const app = express()

const PORT = 5555

app.listen(PORT, () => {
  console.log(`Hello from server ${PORT}`)
})
