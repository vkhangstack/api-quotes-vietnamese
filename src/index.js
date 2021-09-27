'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./database/db')
connectDB() // connect to the database

app.use(cors())
app.use(express.json())

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`)
})
