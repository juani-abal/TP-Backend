const mongoose = require ('mongoose');

const chaptersSchema = mongoose.Schema({
    title: { type: String, lowercase: true, required: true, unique:false },
    description: { type: String, lowercase: true, required: true },
    url: { type: String, required: true },
    serieId: {type: mongoose.Schema.Types.ObjectId, ref: 'Serie'}
})

module.exports = mongoose.model('Chapter', chaptersSchema);