const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisorderTypeSchema = new Schema({
    name: {type: String, required:true}
});

module.exports = mongoose.model('DisorderType', DisorderTypeSchema);
