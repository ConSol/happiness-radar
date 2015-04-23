var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema({
    name:  String,
    author: String,
    created: { type: Date, default: Date.now },
    active:  Boolean,
    question: String,

    // Tokens
    tokens: []
});

module.exports = mongoose.model('Survey', surveySchema);
