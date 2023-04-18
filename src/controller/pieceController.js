const PieceModel = require('../models/pieceModel') //A const model não é uma variável normal, mas uma classe. Por isso começa com letra maiúscula

const createPiece = async (req, res) => {
    try{
        const { gauge, thicknessV, thicknessH, Weight } = req.body
        const newPiece = new PieceModel({
            gauge,thicknessV, thicknessH, Weight
        })
        const savePiece = await newPiece.save()

        res.status(201).json(savePiece)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createPiece
}