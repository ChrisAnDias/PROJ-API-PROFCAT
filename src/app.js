const express = require('express')
const cors  = require('cors')
const mongoose = require('./database/mongooseConnect')
const pieceRoutes = require('./routes/pieceRoutes')

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect()

app.use(pieceRoutes)

module.exports = app