const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word: {type: String, required: true},
    mainImg: {type: String, required: true},
    subImg: {type: String, required: true},
    wordSound: {type: String, required: true},
    sentence: {type: String, required: true},
    sentenceSound: {type: String, required: true}
});

module.exports = mongoose.model('Word', WordSchema);