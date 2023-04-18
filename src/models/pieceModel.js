const mongoose = require('mongoose')

const pieceSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId,
        auto: true
    },
    gauge: {
        type: String,
        required: true,
        unique: true,
    },
    thicknessV: {
        type: Number,
        required: true,
    },
    thicknessH: {
        type: Number,
        required: true,
    },
    Weight: {
        type: Number,
        required: true,
    }
}, { timestamps: true})

const Model = mongoose.model('piece', pieceSchema)

module.exports = Model