const controller = require('../controller/pieceController')
const express = require('express')

const router = express.Router()

router.post("/piece", controller.createPiece)

module.exports = router