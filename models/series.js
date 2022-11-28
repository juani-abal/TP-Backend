const mongoose = require ('mongoose');

const serieSchema = mongoose.Schema({
    title: { type: String, unique: true, lowercase: true, required: true },
    description: { type: String, lowercase: true, required: true },
    url: { type: String, required: true },
    category: { type: String, lowercase: true, required: true },
    chapters: [{type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'}],

})

module.exports = mongoose.model('Serie', serieSchema);