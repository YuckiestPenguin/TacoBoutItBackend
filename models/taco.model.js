const mongoose = require('mongoose');

const TacoSchema = mongoose.Schema({
    name: String,
    id: Number,
    imageUrl: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Taco', TacoSchema);