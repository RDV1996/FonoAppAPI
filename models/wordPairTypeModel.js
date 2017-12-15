const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordPairTypeSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    disorderType: {type: Schema.Types.ObjectId, ref: "DisorderType",required: true}
});

module.exports = mongoose.model('WordPairType', WordPairTypeSchema);