const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AgeRangeSchema = new Schema({
    minAge: {type: Number, required:true},
    maxAge: {type: Number, required:true}
});

module.exports = mongoose.model('AgeRange', AgeRangeSchema);
