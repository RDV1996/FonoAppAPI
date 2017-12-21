const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {type: String, required:true},
    password: {type: String, required:true},
    isAdmin: {type:Boolean, required:true},
    voornaam: {type: String, required:true},
    achternaam: {type: String, required:true}
});

module.exports = mongoose.model('User', userSchema);
