import express from 'express'
import { json } from 'body-parser'

const app = express()
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
  res.send('hi, there')
})

const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})

// https://ticketing.dev/api/users/currentuser