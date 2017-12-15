const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordPairSchema = new Schema({
    rightWord: {type: Schema.Types.ObjectId,ref: "Word", required: true},
    wrongWord: {type: Schema.Types.ObjectId,ref: "Word" ,required: true},
    ageRange: {type: Schema.Types.ObjectId, ref: "AgeRange", required: true},
    wordPairType: {type: Schema.Types.ObjectId, ref: "WordPairType", required: true}
});

module.exports = mongoose.model('WordPair', WordPairSchema);